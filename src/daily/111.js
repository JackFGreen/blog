var entry = {
  a: {
    b: {
      c: {
        dd: 'abcdd'
      }
    },
    d: {
      xx: 'adxx'
    },
    e: 'ae'
  }
}

// 要求转换成如下对象
var output = {
  'a.b.c.dd': 'abcdd',
  'a.d.xx': 'adxx',
  'a.e': 'ae'
}

function handle(obj) {
  const result = {}
  loop(obj)

  function loop(obj, arr = []) {
    const keys = Reflect.ownKeys(obj)
    keys.forEach(k => {
      arr.push(k)

      const val = obj[k]
      if (typeof val === 'object') {
        loop(val, arr)
      } else {
        const key = arr.join('.')
        result[key] = val
      }

      arr.pop()
    })
  }

  return result
}

const result = handle(entry)
console.log(result)
console.log(JSON.stringify(result) === JSON.stringify(output))

function handleReverse(obj) {
  const result = {}

  const keys = Reflect.ownKeys(obj)
  keys.forEach(str => {
    const arr = str.split('.')
    let last = arr.reduce((pre, cur, i) => {
      pre[cur] = pre[cur] || {}
      if (arr.length - 1 === i) pre[cur] = obj[str]
      return pre[cur]
    }, result)
  })

  return result
}

const reverse = handleReverse(output)
console.log(reverse)
console.log(JSON.stringify(reverse) === JSON.stringify(entry))
