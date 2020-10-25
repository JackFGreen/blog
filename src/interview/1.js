// proxy arr[-1]
const arr = []
arr[-1] = -1
console.log(arr)

const p = new Proxy(arr, {
  get(t,p,r) {
    return t[p]
  }
})
console.log(p[-1])
