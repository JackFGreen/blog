// add(1); 			// 1
// add(1)(2);  	// 3
// add(1)(2)(3)；// 6
// add(1)(2, 3); // 6
// add(1, 2)(3); // 6
// add(1, 2, 3); // 6

function add() {
  let args = [].slice.call(arguments)
  let fn = function() {
    let fn_args = [].slice.call(arguments)
    return add.apply(null, args.concat(fn_args))
  }
  fn.toString = function() {
    console.log('toString')
    return args.reduce((a, b) => a + b)
  }
  return fn
}
const result = add(1)(2)
console.log(result + '')

// const curry1 = (fn, arr = []) => (...args) =>
//   ((...newArgs) => (newArgs.length >= fn.length ? fn(...newArgs) : curry(fn, newArgs)))([
//     ...args,
//     ...arr
//   ])

// function curry(fn, args) {
//   // fn 就是 carried 函数
//   // carried 函数 形参个数
//   var length = fn.length
//   // carried 的 部分参数
//   var args = args || []
//   return function() {
//     var newArgs = args.concat([].slice.call(arguments))
//     if (newArgs.length >= length) {
//       // 参数够了
//       return fn.apply(this, newArgs)
//     } else {
//       // 参数不够 继续收集
//       return curry.call(this, fn, newArgs)
//     }
//   }
// }

// function fn(a, b, c) {
//   return a * b * c
// }

// const curried1 = curry1(fn)
// const curried = curry(fn)

// const res11 = curried(1, 2, 3)
// const res12 = curried(1)(2, 3)
// const res13 = curried(1)(2)(3)

// const res1 = curried(1, 2, 3)
// const res2 = curried(1)(2, 3)
// const res3 = curried(1)(2)(3)

// console.log(res11, res12, res13)
// console.log(res1, res2, res3)
