const obj = {
  [Symbol.iterator]() {
    let n = 0;
    return {
      next() {
        return {
          value: ++n,
          done: n > 3
        };
      }
    };
  }
  // next() {
  //   return {
  //     value: ++n,
  //     done: n > 3
  //   }
  // }
}

const ite = obj[Symbol.iterator]()
console.log(obj)
console.log(ite)

console.log(ite.next())
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())

for (const v of obj) {
  console.log('for of')
  console.log(v)
}
