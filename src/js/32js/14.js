/**
 * 14.模拟new操作
 */

function _new(fn, ...args) {
  const obj = Object.create(fn.prototype)
  const res = fn.apply(obj, args)
  return typeof res === 'function' || res instanceof Object ? res : obj
}

function F (...args) {
  console.log(this, args)
}
const o = _new(F, 1)
console.log(o)

function FF (...args) {
  console.log(this, args)
  return {
    name: 'FF'
  }
}
const oo = _new(FF, 1)
console.log(oo)