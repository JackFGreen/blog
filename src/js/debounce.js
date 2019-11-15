function debounce(fn, t) {
  let timer
  return function(args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      console.log('debounce run')
      fn.call(this, args)
    }, t)
  }
}

function throttle(fn, t) {
  throttle.start = throttle.start || Date.now()
  return function(args) {
    const cur = Date.now()
    const diff = cur - throttle.start
    if (diff < t) return
    throttle.start = cur
    console.log('throttle run')
    fn.call(this, args)
  }
}

function log(args) {
  console.log(`
  log
  `)
  console.log(this)
  console.log(args)
}

const thro = throttle(log, 1000)
const debou = debounce(log, 1000)

const obj = {
  name: 'obj',
  thro,
  debou
}

const t = setInterval(() => {
  console.log('call debounce')
  obj.debou('debou-args')
}, 300)
setTimeout(() => {
  clearInterval(t)
}, 3000)

setInterval(() => {
  console.log('call throttle')
  obj.thro('thro-args')
}, 300)
