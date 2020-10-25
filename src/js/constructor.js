function Parent(x) {
  this.x = 'Parent x: ' + x
}
const p1 = new Parent()
console.log('p1.constructor', p1.constructor) // [Function: Parent]
Parent.prototype.fn = function () {}

// Parent.prototype = {} // 修改 constructor
// const p2 = new Parent()
// console.log('p2.constructor', p2.constructor) // [Function: Object]

Parent.prototype.fn = function parentFn () {} // 不修改 constructor
const p2 = new Parent()
console.log('p2.constructor', p2.constructor) // [Function: Parent]

// function Child(y) {
//   new Parent('from child')
//   this.y = 'Child y: ' + y
// }
// Child.prototype = Parent.prototype

// const c1 = new Child()
// console.log('===c1')
// console.log(c1)
// console.log('c1.constructor', c1.constructor) // [Function: Parent]
// console.log('c1.x', c1.x)
// console.log('c1.fn', c1.fn)

function Child(y) {
  const c = Parent.call(this, 'from child')
  this.y = 'Child y: ' + y
}
Child.prototype = Parent.prototype
Child.prototype.constructor = Child

const c1 = new Child()
console.log('===c1')
console.log(c1)
console.log('c1.constructor', c1.constructor) // [Function: Child]
console.log('c1.x', c1.x)
console.log('c1.fn', c1.fn)
