const obj = {
  a: 1,
  b: 2
}

const keys = Reflect.ownKeys(obj)
console.log(keys)

const arr = [4,5,6,7,8,9]

for (const v of arr) {
  console.log(v)
}

arr[Symbol.iterator] = function *() {
  let idx = 1
  do {
    console.log('[Symbol.iterator] - idx', idx)
    yield this[idx]
  } while ((idx += 2) < this.length)
}

for (const v of arr) {
  console.log(v)
}
