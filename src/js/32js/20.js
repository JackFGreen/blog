/**
 * 20. Promise
 * https://juejin.cn/post/6860037916622913550
 *
 * status value reason onFulfilledCallbacks onRejectedCallbacks
 */
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class MyPromise {
  constructor(exc) {
    this.status = PENDING

    this.value = null
    this.reason = null

    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    const resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED
        this.value = value

        this.onFulfilledCallbacks.forEach((fn) => {
          fn(this.value)
        })
      }
    }

    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.reason = reason

        this.onRejectedCallbacks.forEach((fn) => {
          fn(this.reason)
        })
      }
    }

    // new Promise error 直接 reject 可以 catch
    try {
      exc(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  then(onFulfilled, onRejected) {
    // 值穿透
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value

    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (reason) => {
            throw new Error(reason instanceof Error ? reason.message : reason)
          }

    // 当前 new Promise
    const p1 = this

    // then 返回 Promise
    const p2 = new MyPromise((resolve, reject) => {
      if (p1.status === PENDING) {
        // p1 执行栈
        p1.onFulfilledCallbacks.push(() => {
          // p1 resolve 清空栈
          setTimeout(() => {
            try {
              // p1.then 结果
              const result = onFulfilled(p1.value)

              // p2 resolve
              // 如果 p1.then 返回 Promise=tmp，用 p2 的 resolve,reject 捕获 tmp 的 resolve,reject，传递给 p2.then
              // 否则 p2 直接 resolve(p1.then 结果)
              result instanceof MyPromise ? result.then(resolve, reject) : resolve(result)
            } catch (err) {
              // p1.then 抛错，用 p2 reject 捕获
              reject(err)
            }
          }, 0)
        })

        p1.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const result = onRejected(p1.reason)
              result instanceof MyPromise ? result.then(resolve, reject) : resolve(result)
            } catch (err) {
              reject(err)
            }
          }, 0)
        })
      }

      if (p1.status === FULFILLED) {
        setTimeout(() => {
          try {
            const result = onFulfilled(p1.value)
            result instanceof MyPromise ? result.then(resolve, reject) : resolve(result)
          } catch (err) {
            reject(err)
          }
        }, 0)
      }

      if (p1.status === REJECTED) {
        setTimeout(() => {
          try {
            const result = onRejected(p1.reason)
            result instanceof MyPromise ? result.then(resolve, reject) : resolve(result)
          } catch (err) {
            reject(err)
          }
        }, 0)
      }
    })

    return p2
  }

  // Promise.prototype.catch = Promise.prototype.then(null, onRejected)
  catch(onRejected) {
    return this.then(null, onRejected)
  }

  static resolve(value) {
    if (value instanceof MyPromise) {
      return value
    } else {
      // 返回新的 promise, status=FULFILLED
      return new MyPromise((resolve) => resolve(value))
    }
  }

  static reject(reason) {
    return new MyPromise((resolve, reject) => reject(reason))
  }

  /**
   * all FULFILLED -> resolve
   * once REJECTED -> reject
   * ensure Promise -> Promise.resovle
   */
  static all(arr) {
    const len = arr.length
    const vals = []
    let count = 0

    return new MyPromise((resolve, reject) => {
      for (const k of arr) {
        MyPromise.resolve(k).then((v) => {
          vals.push(v)
          count++
          if (count === len) resolve(vals)
        }, reject)
      }
    })
  }

  static race(arr) {
    return new Promise((resolve, reject) => {
      arr.forEach((k) => {
        MyPromise.resolve(k).then(resolve, reject)
      })
    })
  }
}

/**
 * test
 */
const promise = new MyPromise((resolve, reject) => {
  // Math.random() < 0.5 ? resolve(1) : reject(-1)
  setTimeout(() => {
    Math.random() < 0.5 ? resolve(1) : reject(-1)
    // resolve(1)
  }, 1000)
})
  .then(
    (res) => {
      console.log('then1-f', res)
      // return 2
      return new MyPromise((r, j) =>
        setTimeout(() => {
          // r('Promise 2')
          j('Promise 2')
        }, 1000)
      )
    },
    (err) => {
      console.log('then1-r', err)
    }
  )
  .then(
    (res) => {
      console.log('then2-f', res)
    },
    (err) => {
      console.log('then2-r', err)
    }
  )

/**
 * all
 */
const p1 = new MyPromise((r) => {
  setTimeout(() => {
    r(1)
  }, 1000)
})

const p2 = new MyPromise((r, j) => {
  setTimeout(() => {
    // r(2)
    j(2)
  }, 2000)
})

MyPromise.all([p1, p2])
  .then((r) => console.log('all', r))
  .catch((e) => console.log('all-e', e))
MyPromise.race([p1, p2])
  .then((r) => console.log('race', r))
  .catch((e) => console.log('race-e', e))
