function Foo() { /* .. */ }
Foo.prototype = { };
var a1 = new Foo();

console.log(a1.constructor.prototype.constructor.prototype.constructor)
