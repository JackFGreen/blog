/**
 * 11.debounce（防抖）
 */

function debounce(fn, time) {
  let t = null

  return function () {
    clearTimeout(t)

    t = setTimeout(() => {
      fn.apply(this, arguments)
    }, time)
  }
}

function run() {
  console.log(this, arguments)
}

const ctx = {
  name: 'ctx',
}

// const fn = debounce(run, 1000)
// const fnn = fn.bind(ctx)

const fnn = debounce(run.bind(ctx), 1000)

fnn(1)
fnn(1)
fnn(1)
fnn(1)
