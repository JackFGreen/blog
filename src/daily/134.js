/**
求两个日期中间的有效日期
如 2015-2-8 到 2015-3-3，返回【2015-2-8 2015-2-9...】
 */
const start = '2015-2-8'
const end = '2015-3-3'

function getDates (start, end) {
  const startMS = new Date(start).getTime()
  const endMS = new Date(end).getTime()
  const diff = endMS - startMS

  const oneDay = 1000 * 60 * 60 *24
  let num = diff / oneDay

  const dates = []

  let first = startMS
  while (num) {
    const cur = new Date(first)
    const y = cur.getFullYear()
    const m = cur.getMonth() + 1
    const d = cur.getDate()
    const date = `${y}-${m}-${d}`
    dates.push(date)

    first += oneDay
    num--
  }
  console.log(dates)
}

getDates(start, end)
