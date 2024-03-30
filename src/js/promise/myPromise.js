const PromiseStatus = {
  Pending: 'pending',
  Fulfilled: 'fulfilled',
  Rejected: 'rejected',
}

class MyPromise {
  status = PromiseStatus.Pending
  value = null
  reason = null
  fulfilledCbs = []
  rejectedCbs = []

  constructor(handler) {
    const resolve = (value) => {
      queueMicrotask(() => {
        this.status = PromiseStatus.Fulfilled
        this.value = value
        this.fulfilledCbs.forEach((fn) => fn(this.value))
      })
    }
    const reject = (reason) => {
      queueMicrotask(() => {
        this.status = PromiseStatus.Rejected
        this.reason = reason
        this.rejectedCbs.forEach((fn) => fn(this.reason))
      })
    }

    handler(resolve, reject)
  }

  then(resolveFn, rejectFn) {
    resolveFn = resolveFn || ((v) => v)
    rejectFn = rejectFn || ((v) => v)

    return new MyPromise((resolve, reject) => {
      if (this.status === PromiseStatus.Pending) {
        this.fulfilledCbs.push(() => {
          const res = resolveFn(this.value)
          resolve(res)
        })

        this.rejectedCbs.push(() => {
          const res = rejectFn(this.reason)
          reject(res)
        })
      }

      if (this.status === PromiseStatus.Fulfilled) {
        const res = resolveFn(this.value)
        resolve(res)
      }

      if (this.status === PromiseStatus.Rejected) {
        const res = rejectFn(this.reason)
        reject(res)
      }
    })
  }

  catch(rejectFn) {
    return this.then(null, rejectFn)
  }

  finally(finallyFn) {
    return this.then(
      (res) => finallyFn(res),
      (err) => finallyFn(err)
    )
  }

  static all(arr = []) {
    return new MyPromise((resolve, reject) => {
      const rets = []
      let j = 0

      for (let i = 0; i < arr.length; i++) {
        const p = arr[i]
        p.then((res) => {
          rets[i] = res
          j++
          if (j === arr.length) {
            resolve(rets)
          }
        }).catch((err) => {
          reject(err)
        })
      }
    })
  }
}

const p1 = new MyPromise((resolve, reject) => {
  console.log('p1 resolve test')
  resolve('from p1 resolve')
})
  .then((res) => {
    console.log('p1 then res: ', res)
    return 'from p1 then'
  })
  .then((res) => {
    console.log('p1 then 2 res: ', res)
    return 'p1'
  })

const p2 = new MyPromise((resolve, reject) => {
  console.log('p2 reject test')
  reject('from p2 reject')
})
  .then(
    (res) => {
      console.log('p2 then res: ', res)
      return 'from p2 then'
    },
    (err) => {
      console.log('p2 then err: ', err)
      return 'err from then'
    }
  )
  .then((res) => {
    console.log('p2 then 2 res: ', res)
  })
  .catch((err) => {
    console.log('p2 catch err: ', err)
  })

const p3 = new MyPromise((resolve, reject) => {
  console.log('p3 finally test')
  resolve('resolve from p3')
  // reject('resolve from p3')
})
  .then((res) => {
    console.log('p3 then: ', res)
  })
  .finally((res) => {
    console.log('p3 finally: ', res)
    return 'p3'
  })

MyPromise.all([p1, p3])
  .then((res) => {
    console.log('MyPromise.all then: ', res)
  })
  .catch((err) => {
    console.log('MyPromise.all catch: ', err)
  })
