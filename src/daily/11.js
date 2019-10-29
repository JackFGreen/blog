// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

const cache = []
function flat (data) {
  if (!Array.isArray(data)) {
    cache.push(data)
    return
  }
  data.forEach(item => flat(item))
  return cache
}

const copy = flat(arr)
console.log(copy)
const notDup = [...new Set(copy)]
console.log(notDup)
const sortArr = notDup.sort((prev, next) => {
  if (prev > next) return 1
  if (prev < next) return -1
  return 0
})
console.log(sortArr)

// Array.from(new Set(arr.flat(Infinity))).sort((a, b) => a - b);

// Array.prototype.flat= function() {
//   return [].concat(...this.map(item => (Array.isArray(item) ? item.flat() : [item])));
// }
// Array.prototype.unique = function() {
//   return [...new Set(this)]
// }
// const sort = (a, b) => a - b;
// console.log(arr.flat().unique().sort(sort));
