// 编程题，找出字符串中 **连续** 出现最多的字符和个数（蘑菇街）

const str1 = 'abcaakjbb'
const result1 = { a: 2, b: 2 }

const str2 = 'abbkejsbcccwqaa'
const result2 = { c: 3 }

function findMax(str) {
  let map = {}
  let pre = ''
  let preLen = 0
  let cur = ''
  let curLen = 0
  for (let i = 0; i < str.length; i++) {
    const s = str[i]
    const next = str[i + 1]
    if (s === next) {
      cur = s
      curLen = curLen ? ++curLen : 2
    } else {
      if (curLen > preLen) {
        if (pre === cur) {
          preLen = curLen
          map[cur] = curLen
        } else {
          map = {
            [cur]: curLen
          }
          pre = cur
          preLen = curLen
        }
      }
      if (curLen === preLen) {
        if (pre !== cur) {
          map[cur] = curLen
        }
      }
      cur = ''
      curLen = 0
    }
  }

  console.log(map)
  return map
}

const find1 = findMax(str1)
console.log(JSON.stringify(find1) === JSON.stringify(result1))
const find2 = findMax(str2)
console.log(JSON.stringify(find2) === JSON.stringify(result2))
