const g = {
  name: 'g',
}

const g1 = new Proxy({}, {
  get(o, k) {
    console.log('g1, get', k)
    return o[k] || g[k]
  },
  set(o, k, v) {
    console.log('g1, set', k, v)
    o[k] = v
  },
})

const g2 = new Proxy({}, {
  get(o, k) {
    console.log('g2, get', k)
    return o[k] || g[k]
  },
  set(o, k, v) {
    console.log('g2, set', k, v)
    o[k] = v
  },
})

console.log('g.name', g.name)
console.log('g1.name', g1.name)
console.log('g2.name', g2.name)

g1.name = 'g1'
g2.name = 'g2'

console.log('g.name', g.name)
console.log('g1.name', g1.name)
console.log('g2.name', g2.name)

console.log(g, g1, g2)
