/**
 * 12.throttle（节流）
 */

function throttle(fn, time) {
  let pre = Date.now()

  return function () {
    const cur = Date.now()
    const diff = cur - pre

    if (diff > time) {
      pre = cur
      fn.apply(this, arguments)
    }
  }
}

function run() {
  console.log(this, arguments)
}

const ctx = {
  name: 'ctx',
}

// const fn = throttle(run, 1000)
// const fnn = fn.bind(ctx)

const fnn = throttle(run.bind(ctx), 1000)

function logFnn(t) {
  setTimeout(() => {
    console.log(t)
    fnn(1)
  }, t)
}

const trr = [0, 400, 800, 1200, 1600, 2000, 2400]
trr.forEach(t => {
  logFnn(t)
})
