import { a, o, modify } from './a.mjs'
// const { a, o, modify } = require('./a.mjs')

console.log('b', a, o)
modify()
console.log('b', a, o)

/**
import
b 0 { name: 'o' }
b 1 { name: 'oo' } // 传引用，修改有效
a 1
aa oo
 */

/**
require
b 0 { name: 'o' }
b 0 { name: 'oo' } // 传值，修改无效
a 1
aa oo
 */
