// 1 1 2 3 5 8
function fib(n) {
  if (n === 1 || n === 2) return 1
  return fib(n - 1) + fib(n - 2)
}

// n x y
// 5 0 1
// 4 1 1
// 3 1 2
// 2 2 3
// 1 3 5
// 0 5 8
function fib2(n, x, y) {
  if (n === 0) return x

  return fib2(n - 1, y, x + y)
}

const res = [fib(3), fib(4), fib(5)]
const res2 = [fib2(3, 0, 1), fib2(4, 0, 1), fib2(5, 0, 1)]
console.log(res, res2)
