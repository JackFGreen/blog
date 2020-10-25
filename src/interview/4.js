function isInteger(n) {
  if (typeof n !== 'number') return false
  const decimal = Math.floor(n)
  const fraction = n - decimal
  return fraction === 0
}

console.log('123', isInteger('123'))
console.log(123, isInteger(123))
console.log(123.123, isInteger(123.123))
