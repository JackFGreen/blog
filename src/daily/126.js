/**
有一堆扑克牌，将牌堆第一张放到桌子上，再将接下来的牌堆的第一张放到牌底，如此往复；

最后桌子上的牌顺序为： (牌底) 1,2,3,4,5,6,7,8,9,10,11,12,13 (牌顶)；

问：原来那堆牌的顺序，用函数实现。
 */
const res = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

/**
=> 231
32
3
<= 123

=> 4231
342
43
4
<= 1234

=> 34251
5342
453
54
5
<= 12345
 */
function sort(data) {
  const arr = []
  let i = 1
  while (data.length) {
    const top = data.pop()
    if (i % 2 === 0) {
      data.unshift(top)
    } else {
      arr.push(top)
    }
    i++
  }
  return arr
}

function sortReverse(data) {
  const arr = []
  let len = data.length
  while (len) {
    const top = data.pop()
    if (arr.length > 1) {
      const last = arr.shift()
      arr.push(last)
    }
    arr.push(top)
    len--
  }
  return arr
}

const origin = sortReverse([...res])
console.log(origin)

const result = sort(origin)
console.log(result)

console.log(JSON.stringify(result) === JSON.stringify(res))
