const timeout = ms => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, ms)
})

const ajax1 = () => timeout(2000).then(() => {
  console.log('1')
  return 1
})
const ajax2 = () => timeout(1000).then(() => {
  console.log('2')
  return 2
})
const ajax3 = () => timeout(2000).then(() => {
  console.log('3')
  return 3
})

const mergePromise = ajaxArray => {
  // 1,2,3 done [1,2,3] es6 + es3
  // function handle (callback) {
  //   const arr = []
  //   let index = 0
  //   const len = ajaxArray.length

  //   function run () {
  //     ajaxArray[index]().then(r => {
  //       arr.push(r)
  //       if (index < len - 1) {
  //         index++
  //         run()
  //       } else {
  //         callback(arr)
  //       }
  //     })
  //   }
  //   run()
  // }

  // function P (fn) {
  //   const callbacks = []

  //   this.then = function (callback) {
  //     callbacks.push(callback)
  //   }

  //   function resolve (res) {
  //     setTimeout(() => {
  //       for (let i = 0; i < callbacks.length; i++) {
  //         const fn = callbacks[i]
  //         fn(res)
  //       }
  //     }, 0)
  //   }

  //   typeof fn === 'function' && fn(resolve)
  // }

  // if (typeof Promise === 'function') {
  //   return new Promise((resolve, reject) => {
  //     handle(resolve)
  //   })
  // } else {
  //   return new P((resolve, reject) => {
  //     handle(resolve)
  //   })
  // }
  const result = []
  async function asyncEach () {
    for (const ajax of ajaxArray) {
      result.push(await ajax())
    }
    return result
  }
  return asyncEach()
}

const a = mergePromise([ajax1, ajax2, ajax3])
  .then(function (data) {
    console.log('done')
    console.log(data) // data 为 [1, 2, 3]
  })
// 执行结果为 1 2 3 done[1, 2, 3]
