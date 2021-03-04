/**
 * 19.深拷贝
 */
function deepCopy(obj, cache = []) {
  if (typeof obj === 'function') return obj.bind()
  
  if (obj === null || typeof obj !== 'object') return obj

  const copy = Array.isArray(obj) ? [] : {}

  const hit = cache.find((o) => o.original === obj)
  if (hit) return hit.copy

  cache.push({
    original: obj,
    copy,
  })

  Object.keys(obj).forEach((k) => {
    copy[k] = deepCopy(obj[k], cache)
  })

  return copy
}

const c = {
  c: 'c',
}

const o = {
  a: 'a',
  b: ['b'],
  c: c,
  d: {
    d: c,
  },
  e: Symbol('e'),
  f: () => {}
}

const r = deepCopy(o)
console.log(o, o.c === o.d.d)
console.log(r, r.c === r.d.d)
console.log(`o.c === r.c`, o.c === r.c)
console.log(`o.e === r.e`, o.e === r.e)
console.log(`o.f === r.f`, o.f === r.f)
