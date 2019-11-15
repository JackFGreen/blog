/**
url有三种情况

https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=&local_province_id=33
https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800&local_province_id=33
https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800,700&local_province_id=33
匹配elective后的数字输出（写出你认为的最优解法）:

[] || ['800'] || ['800','700']
 */
const urls = [
  'https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=&local_province_id=33',
  'https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800&local_province_id=33',
  'https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800,700&local_province_id=33'
]

function getProperty(url, name) {
  let arr = []
  if (typeof URLSearchParams !== 'undefined') {
    const search = new URLSearchParams(url)
    const str = search.get(name)
    arr = str.split(',')
  } else {
    const reg = new RegExp(`${name}=\(\.*\)&`)
    const result = url.match(reg)
    if (result) {
      const str = result[1]
      arr = str.split(',')
    }
  }
  console.log(arr)
}

urls.forEach(e => getProperty(e, 'elective'))
