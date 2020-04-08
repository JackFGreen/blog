var myIterable = {}
myIterable[Symbol.iterator] = function*() {
  yield 1
  yield 2
  yield 3
}

console.log([...myIterable])

function* dataConsumer() {
  console.log('Started')
  console.log(`1. ${yield 'A'}`)
  console.log(`2. ${yield 'B'}`)
  return 'result'
}

let genObj = dataConsumer()
console.log(genObj.next()) // Started

console.log(genObj.next('a')) // 1. a

console.log(genObj.next('b'))
console.log(genObj.next())
console.log(genObj.next())
console.log(genObj.next())
