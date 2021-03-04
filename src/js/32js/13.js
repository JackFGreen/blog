/**
 * 13.函数珂里化
 */

// add(1)(2)(3)(4)=10; add(1)(1,2,3)(2)=9;

function add() {
  const args = [...arguments]

  function fn() {
    args.push(...arguments)
    return fn
  }

  fn.toString = function () {
    return args.reduce((p, c) => p + c, 0)
  }

  return fn
}
const res1 = add(1)(2)(3)(4)
console.log(res1.toString())

const res2 = add(1)(1,2,3)(2)
console.log(res2.toString())
