// // 输入 '1, 2, 3, 5, 7, 8, 10' 输出 '1~3, 5, 7~8, 10'
// const arr = [1, 2, 3, 5, 7, 8, 10]
// function handle(arr) {
//   let tmp = ''
//   const result = []
//   arr.reduce((pre, cur, i) => {
//     if (pre + 1 === cur) {
//       if (!tmp) {
//         tmp += pre + '~'
//         if (result[result.length - 1] === pre) result.pop()
//       }
//       if (arr.length - 1 === i) {
//         tmp += cur
//         result.push(tmp)
//         tmp = ''
//       }
//     } else {
//       if (tmp) {
//         tmp += pre
//         result.push(tmp)
//         tmp = ''
//       }
//       result.push(cur)
//     }
//     return cur
//   })
//   console.log(result)
// }

// handle(arr)

const nums1 = [1, 2, 3, 5, 7, 8, 10];
function simplifyStr(num) {
  var result = [];
  var temp = num[0]
  num.forEach((value, index) => {
    if (value + 1 !== num[index + 1]) {
      if (temp !== value) {
        result.push(`${temp}~${value}`)
      } else {
        result.push(`${value}`)
      }
      temp = num[index + 1]
    }
  })
  return result;
}
console.log(simplifyStr(nums1).join(','))
