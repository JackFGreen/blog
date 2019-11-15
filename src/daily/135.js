/**
在一个字符串数组中有红、黄、蓝三种颜色的球，且个数不相等、顺序不一致，请为该数组排序。使得排序后数组中球的顺序为:黄、红、蓝。

例如：红蓝蓝黄红黄蓝红红黄红，排序后为：黄黄黄红红红红红蓝蓝蓝。
 */
const str = '红蓝蓝黄红黄蓝红红黄红'

function sort (str) {
  let yellow = ''
  let red = ''
  let blue = ''

  const arr = Array.from(str)

  while (arr.length) {
    const cur = arr.pop()
    if (cur === '黄') {
      yellow += cur
    }
    if (cur === '红') {
      red += cur
    }
    if (cur === '蓝') {
      blue += cur
    }
  }

  const res = yellow + red + blue
  console.log(res)
}
sort(str)
