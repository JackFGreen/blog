var fn1 = function(data) {
  if (data == 1) {
    console.log('fn1->' + data)
  } else {
    return 'next'
  }
}

var fn2 = function(data) {
  console.log('fn2->' + data)
  return 'next'
}

var fn3 = function(data) {
  console.log('fn3->' + data)
  console.log('done')
}

Function.prototype.after = function(fn) {
  var self = this
  return function() {
    var ret = self.apply(this, arguments)
    if (ret == 'next') {
      return fn.apply(this, arguments)
    }
    return ret
  }
}

var order = fn1.after(fn2).after(fn3)
order(1)
