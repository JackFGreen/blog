async function fn1(next) {
  console.log('fn1 start')
  const res = await next()
  console.log('fn1 end', res)
}

async function fn2(next) {
  console.log('fn2 start')
  const res = await next()
  console.log('fn2 end', res)
  return 'res2'
}

function fn3(next) {
  console.log('fn3 start')
  return new Promise((r) => {
    console.log('do...')
    setTimeout(() => {
      console.log('fn3 end')
      r('res3')
    }, 3000)
  })
}

// 0->n 递归将 next 传入中间价调用执行
function compose(mid) {
  return async function () {
    let i = 0
    async function next() {
      if (mid[i]) {
        return await mid[i++](next)
      }
    }
    await next()
  }
}

compose([fn1, fn2, fn3])()
