import 'reflect-metadata'

const httpMethodMetaName = Symbol('http:method')
function httpPost(target, propertyKey) {
  Reflect.defineMetadata(httpMethodMetaName, 'post', target, propertyKey)
}
function httpGet(target, propertyKey) {
  Reflect.defineMetadata(httpMethodMetaName, 'get', target, propertyKey)
}

const httpPathMetaName = Symbol('http:path')
function path(url) {
  return (target, propertyKey, descriptor) => {
    Reflect.defineMetadata(httpPathMetaName, url, target, propertyKey)
    if (!descriptor.value) return

    const oldFn = descriptor.value

    descriptor.value = (
      req = {
        body: 'request body',
        query: 'request query',
      },
      res = {
        send(ret) {
          console.log('http send: ', url, 'res: ', ret)
        },
      }
    ) => {
      const params = Object.assign({}, req.body, req.query)
      const ret = oldFn.call(this, params)
      res.send(ret)
      return ret
    }
  }
}

class User {
  @httpPost
  @path('/user/login ')
  login() {
    return 'user info'
  }

  @httpGet
  @path('/user/exit ')
  exit() {
    return 'user exit'
  }
}

function run(app) {
  const user = new User()

  const proto = Reflect.getPrototypeOf(user)
  const keys = Reflect.ownKeys(proto).filter((o) => o !== 'constructor')

  for (const methodName of keys) {
    const method = user[methodName]
    if (typeof method !== 'function') break
    const httpMethod = Reflect.getMetadata(httpMethodMetaName, user, methodName)
    const httpPath = Reflect.getMetadata(httpPathMetaName, user, methodName)
    console.log('reflect', httpMethod, httpPath, method)
    app[httpMethod](httpPath, method)
    // 等于 app.post('', () => {})
  }
}

const koa = {
  get(path, method) {
    console.log('koa get: ', path, method())
  },
  post(path, method) {
    console.log('koa post: ', path, method())
  },
}

run(koa)
