function add(...nums) {
  let x = nums.reduce((p, n) => p + n, 0)
  const p = new Proxy(add, {
    get() {
      console.log('get')
      return () => x
    },
    apply(target, arg, args) {
      console.log('apply')
      console.log(target, arg, args)
      x += args[0]
      return p
    },
  })
  return p
}

const res = add(1)(2)(3)
const res2 = add(1, 2)(3)
console.log(res, res2)
