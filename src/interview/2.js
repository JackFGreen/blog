// arr.flat
const arr = [[[1, 2]], [3, 4], 5, [[[6, 7]]]]

function flat(arr) {
  return arr.reduce((pre, cur) => {
    console.log(pre, cur)
    return Array.isArray(cur) ? pre.concat(flat(cur)) : pre.concat(cur)
  }, [])
}

const res = flat(arr)
console.log(res)
