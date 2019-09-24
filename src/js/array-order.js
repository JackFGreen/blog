// [ [ 3, 4, 5 ], [ 10, 11 ], [ 20 ], [ 92 ] ]
const arr = [92, 10, 3, 4, 5, 11, 10, 11, 20]
const result = orderArr(arr)
console.log(result)

function orderArr (arr) {
  const map = {}
  arr.forEach(n => {
    const t = getTen(n)
    map[t] = map[t] || []
    if (!map[t].includes(n)) map[t].push(n)
  })
  return Object.values(map)
}

function getTen (s) {
  return Math.floor(s/10)
}
