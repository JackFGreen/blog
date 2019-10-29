/**
给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。

你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

示例：

给定 nums = [2, 7, 11, 3, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
*/

function find (arr, n) {
  // arr  [2, 7, 9, 11, 3, 15, 0]
  // arr  [2, 7, 9, 3, 0]
  // diff [7, 2, 0, 6, 9]
  const diff = arr.map(i => {
    if (i <= n) {
      return n - i
    } else {
      arr.splice(i, 1)
    }
  })
  // arr & diff 交集
  const res = arr.filter(i => diff.includes(i))
  console.log(res)
}

const data = [2, 7, 9, 11, 3, 15, 0]
const target = 9
find(data, target)
// [ 2, 7, 9, 0 ]
