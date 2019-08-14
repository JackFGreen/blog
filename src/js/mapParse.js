let unary = fn => val => fn(val)
// let unary = fn => {
//   return val => {
//     return fn(val)
//   }
// }
let parse = unary(parseInt)
const res = ['1.1', '2', '0.3'].map(parse)
// const res = ['1.1', '2', '0.3'].map((item, index) => {
//   // return parse(item, index)
//   // return unary(parseInt)(item, index)
//   return parseInt(item)
// })
console.log(res)
