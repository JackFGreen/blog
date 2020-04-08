// const p = new Promise((res, rej) => {
//   res(42)
// })

// p.then(res => {
//   foo.bar()
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })

const thenable = {
  then: function (cb) {
    console.log('then')
    // throw 'then err'
    cb(42)
  }
}

Promise.resolve(thenable) // return 42
// Promise.reject(thenable) // return thenable
.then(r => console.log('r', r), e => console.log('e', e))
