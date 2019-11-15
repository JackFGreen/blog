let a = 0
const o = {
  name: 'o'
}
const modify = () => {
  a++
  o.name = 'oo'
}

setTimeout(() => {
  console.log('a', a)
  console.log('aa', o.name)
}, 1000)

export {
  a,
  o,
  modify
}

// exports.a = a
// exports.o = o
// exports.modify = modify
