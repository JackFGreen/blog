const p = {
  name: 'p name',
  attrs: {
    hair: 'black hair'
  },
  arr: [1,2],
  say () {
    console.log('say')
  }
}

const _p = new Proxy(p, {
  get (target, key, receiver) {
    console.log('get', key)
    return Reflect.get(target, key, receiver)
  },
  set (target, key, value, receiver) {
    console.log('set', key)
    return Reflect.set(target, key, value, receiver)
  }
})

_p.attrs.hair = 'new hair'
_p['attrs.hair'] = 'new hair'
// _p.name = 'new name'
// _p.arr.push(3)
// _p.say = 'say'

// const op = new Proxy({}, {
//   get () {
//     return op
//   }
// })
// console.log(op.a === op)

// var twice = {
//   apply (target, ctx, args) {
//     return Reflect.apply(...arguments) * 2;
//   }
// };
// function sum (left, right) {
//   return left + right;
// };
// var proxy = new Proxy(sum, twice);
// console.log(proxy(1, 2))
