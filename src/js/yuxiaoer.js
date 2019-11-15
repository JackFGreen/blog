// 1. a b c d

// 2.
const array = ['1', '2', '3', 6, 4, -99, -101]
const result = array.reduce((prev, cur) => {
  if (+cur % 2 === 0) {
    return prev
  } else {
    return +cur + prev
  }
}, 0)
console.log(result)

// 3.
function bindLeft(fn, ...rest) {
  return (c, d) => {
    return fn1(...rest, c, d)
  }
}
const fn1 = (a, b, c, d) => a - b * c + d
const fn2 = bindLeft(fn1, 1, 2) // a=1 b=2
console.log(fn2(3, 4)) // 1-2*3+4 = -1

// 4. 冒泡正整数，非正整数位置不变
// [11,-1,6,5,-4,-7,9,8] => [5,-1,6,8,-4,-7,9,11]
function sleep (t) {
  return new Promise(r => {
    setTimeout(() => {
      console.log('sleep...')
      r()
    }, t);
  })
}
const arr = [11, -1, 6, 5, -4, -7, 9, 8]
async function sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i;) {
      let next = j + 1
      if (arr[j] <= 0) {
        continue
      } else {
        while (arr[next] <= 0) {
          next++
        }
        if (arr[j] > arr[next]) {
          const tmp = arr[next]
          arr[next] = arr[j]
          arr[j] = tmp
          await sleep(1000)
        }
        j = next
        console.log(arr)
      }
    }
  }
}
sort(arr)

// function sort2(arr) {
//   const map = {}
//   const filterArr = arr.filter((e, i) => {
//     if (e > 0) {
//       return true
//     } else {
//       map[i] = e
//       return false
//     }
//   })
//   console.log(map, filterArr)

//   for (let i = 0; i < filterArr.length - 1; i++) {
//     for (let j = 0; j < filterArr.length - 1 - i; ) {
//       let next = j + 1
//       if (filterArr[j] <= 0) {
//         continue
//       } else {
//         if (filterArr[j] > filterArr[next]) {
//           const tmp = filterArr[next]
//           filterArr[next] = filterArr[j]
//           filterArr[j] = tmp
//         }
//         j = next
//         console.log(filterArr)
//       }
//     }
//   }
//   for (const k in map) {
//     const val = map[k]
//     filterArr.splice(k, 0, val)
//   }
//   console.log(filterArr)
// }
// sort2(arr)
