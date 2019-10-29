// Promise.race()

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(1)
    reject(1)
  }, 1000)
})

const p2 = new Promise(r => {
  setTimeout(() => {
    r(2)
  }, 2000)
})

Promise._race = args =>
  new Promise((resolve, reject) => {
    args.forEach(p => {
      p.then(resolve, reject)
    })
  })

Promise._race([p1, p2])
  .then(r => console.log('race-then', r))
  .catch(e => console.log('race-err', e))
