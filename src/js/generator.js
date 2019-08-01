// var myIterable = {};
// myIterable[Symbol.iterator] = function*() {
//   yield 1;
//   yield 2;
//   yield 3;
// };

// console.log([...myIterable]);

// function* dataConsumer() {
//   console.log('Started');
//   console.log(`1. ${yield}`);
//   console.log(`2. ${yield}`);
//   return 'result';
// }

// let genObj = dataConsumer();
// genObj.next();
// // Started
// genObj.next('a')
// // 1. a
// genObj.next('b')
// console.log(genObj.next())

function Foo() { /* .. */ }
Foo.prototype = { };
var a1 = new Foo();

console.log(a1.constructor.prototype.constructor.prototype.constructor)
