/**
 * 15.instanceof
 */

function _instanceof(o, f) {
  if (o === null || typeof o !== 'object') return false

  let proto = Object.getPrototypeOf(o)

  while (true) {
    if (proto === null) return false
    if (proto === f.prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}

const o = {}
console.log(_instanceof(o, Object), o instanceof Object)

function F() {}
const oo = new F()
console.log(_instanceof(oo, F), oo instanceof F)
console.log(_instanceof(oo, Object), oo instanceof Object)
