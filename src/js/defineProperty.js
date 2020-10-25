const p = {
  name: 'p name',
}

let oldVal = p.name

Object.defineProperty(p, 'name', {
  get() {
    console.log('get', 'name')
    return oldVal
  },
  set(val) {
    console.log('set', val)
    oldVal = val
  },
})

p.name = 'new-name'
console.log(p.name)

const arr = ['a', 'b', 'c']
let oldArrVal = arr[1]
Object.defineProperty(arr, '1', {
  get() {
    console.log('get', '1')
    return oldArrVal
  },
  set(val) {
    console.log('set', val)
    oldArrVal = val
  },
})
arr[1] = 'new-b'
console.log(arr[1])

arr.push('not-work')

const _arr = new Proxy(arr, {
  get(o, k, r) {
    console.log('proxy get')
    return Reflect.get(o, k, r)
  },
  set(o, k, v, r) {
    console.log('proxy set', v)
    return Reflect.set(o, k, v, r)
  },
})

_arr.push('work-proxy')
console.log(_arr[3])
