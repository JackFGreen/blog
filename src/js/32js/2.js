/**
 * 02.数组去重
 */

const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}]
// => [1, '1', 17, true, false, 'true', 'a', {}, {}]

const res1 = [...new Set(arr)]
console.log(res1)

function run(arr) {
  const res = []

  for (const k of arr) {
    if (!arr.includes(k)) res.push(k)
  }

  return res
}

const res2 = run(arr)
console.log(res2)
