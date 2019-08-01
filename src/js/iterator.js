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
};

const ite = obj[Symbol.iterator]()
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())
