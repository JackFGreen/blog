const compose = require('./compose')

// 判断参数 递归调用拼接参数
function curry(fn) {
  const len = fn.length
  // curry 返回的，实际执行的函数
  return function run(...args) {
    // 参数符合 curry 调用的函数
    if (args.length >= len) {
      return fn.apply(null, args)
    }
    // 不满足 递归返回
    return function next(...args2) {
      return run(...args.concat(args2))
    }
  }
}

function add(x, y) {
  return x + y
}

const curryAdd = curry(add)
console.log(curryAdd)

const add1 = curryAdd(1) // 不执行 参数不够 返回函数
const res1 = add1(2) // 执行
console.log(add1, res1)

const add3 = curryAdd(3) // 不执行 第二轮 返回函数
const res2 = add3(4) // 执行
console.log(add3, res2)

// const res = compose(add)(10, 1)
const res = compose(add1, add3)(10)
console.log(res)
