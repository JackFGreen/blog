/**
 * 01.数组扁平化
 */

const arr = [1, [2, [3, [4, 5]]], 6]
// => [1, 2, 3, 4, 5, 6]

function flat(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flat(cur) : cur)
  }, [])
}

const res = flat(arr)
console.log(res)
