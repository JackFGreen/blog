// node --experimental-modules
// import { a, o, modify } from './a.mjs'
const { a, o, modify } = require('./a.mjs')

console.log('b', a, o)
modify()
console.log('b', a, o)

/**
import
b 0 { name: 'o' }
b 1 // 类似指针，修改有效 { name: 'oo' } // 对象指针
a 1
aa oo
 */

/**
require
b 0 { name: 'o' }
b 0 // 传值，修改无效 { name: 'oo' } // 对象引用
a 1
aa oo
 */
