// https://stackoverflow.com/questions/9431434/can-i-throw-an-exception-in-javascript-that-stops-javascript-execution

function run(fn) {
  fn()
}

function fn1() {
  console.log('fn1')
  // throw new Error('err from fn1')
  fn()
  // f'n
}

function fn2() {
  console.log('fn2')
  // throw new Error('err from fn2')
  fn()
  // f'n
}

/**
 * 同步调用 1
 * 异步调用之前
 */
// run(() => {
//   console.log('run fn1')
//   fn1()
// })
// run(() => {
//   console.log('run fn2')
//   fn2()
// })

/**
 * promise
 */
new Promise(() => {
  console.log('promise 1')
  fn1()
})
new Promise(() => {
  console.log('promise 2')
  fn2()
})

/**
 * setTimeout
 */
// setTimeout(() => {
//   console.log('timeout 1')
//   fn1()
// })
// setTimeout(() => {
//   console.log('timeout 2')
//   fn2()
// })

/**
 * 同步调用 2
 * 异步调用之后
 */
run(() => {
  console.log('run fn1')
  fn1()
})
run(() => {
  console.log('run fn2')
  fn2()
})
