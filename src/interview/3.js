// check tag closed
const tag = 's<div>123<span>456</span>789</div>s'

function check(str) {
  const arr = []
  const start = /<\w+>/
  const end = /<\/\w+>/

  // const a1 = str.match(start)
  const a1 = start.exec(str)
  // const a2 = str.match(end)
  console.log(a1,a1.index)
  // console.log(a1, a2)
}

check(tag)
