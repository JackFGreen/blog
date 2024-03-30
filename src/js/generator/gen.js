const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3 = Promise.resolve(3)

p1.then((res1) => {
  console.log('res1', res1)
  p2.then((res2) => {
    console.log('res2', res2)
    p3.then((res3) => {
      console.log('res3', res3)
    })
  })
})

function* fn() {
  const r1 = yield p1
  console.log('r1', r1)
  const r2 = yield p2
  console.log('r2', r2)
  const r3 = yield p3
  console.log('r3', r3)
  return r3
}
const g = fn()
g.next().value.then((r) => {
  g.next(r).value.then((r) => {
    g.next(r).value.then((r) => {
      g.next(r)
    })
  })
})

function gen(gfn) {
  const g = gfn()

  function run(v) {
    const { value, done } = g.next(v)
    if (done) return
    value.then((res) => {
      console.log('gen')
      run(res)
    })
  }
  run()
}
gen(fn)
