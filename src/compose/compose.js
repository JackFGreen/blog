// compose(f,g,h)()
// n->0 依次执行 返回给前一个
function compose(...fns) {
  return function (...args) {
    // 函数数组 末尾开始执行 返回数据到前一个函数
    return fns.reduceRight((pre, cur) => {
      pre = Array.isArray(pre) ? pre : [pre]
      return cur(...pre)
    }, args)
  }
}

function log1(...args) {
  console.log('log1', args)
  return args
}

function log2(...args) {
  console.log('log2', args)
  return args
}

function log3(...args) {
  console.log('log3', args)
  return args
}

compose(log1)(1)
compose(log1, log2, log3)(1, 2, 3)

module.exports = compose
