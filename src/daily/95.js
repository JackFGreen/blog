// deepCopy
function deepCopy (obj, cache = []) {
  // 非对象直接返回
  if (obj === null || typeof obj !== 'object') return obj

  // 循环引用返回同一个 copy
  const hit = cache.find(e => e.origin === obj)
  if (hit) return hit.copy

  const copy = Array.isArray(obj) ? [] : {}
  cache.push({
    origin: obj,
    copy
  })

  Object.keys(obj).forEach(k => {
    copy[k] = deepCopy(obj[k], cache)
  })
  console.log(cache)
  return copy
}

const data = {
  a: {
    aa: {
      aaa: 1
    }
  }
}
const copy = deepCopy(data)
console.log(copy, data)
console.log(copy === data)
console.log(JSON.stringify(copy) === JSON.stringify(data))
