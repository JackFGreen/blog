process.nextTick(() => console.log('nextTick'))
setImmediate(() => console.log('setImmediate'))
setTimeout(() => console.log('setTimeout'))
Promise.resolve().then(() => console.log('promise'))

const mem = process.memoryUsage()
console.log(mem)

var p = new Promise(function (resolve, reject) {
  resolve(374)
})

p.then(
  function fulfilled(message) {
    foo.bar()
    console.log(message) // 不会执行
  },
  function rejected(err) {
    // 不会执行
  }
).catch((e) => console.log(e))
