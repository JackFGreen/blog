function Foo(name) {
  this.name = name
}
Foo.prototype.fn = function () {
  return this.name
}
const o1 = new Foo('o1')

console.log('o1', o1)
console.log('o1.fn', o1.fn())

/**
 * custom new
 */
function newFn(fn, ...args) {
  const obj = {}
  let objPrototype = {}

  objPrototype = fn.prototype
  // objPrototype.constructor = fn
  obj.__proto__ = objPrototype

  fn.apply(obj, args)

  return obj
}

const o2 = newFn(Foo, 'o2')
// const o2 = new Foo('o2')

console.log('o2', o2)
console.log('o2.fn', o2.fn())

console.log(o1.constructor === o2.constructor)
