// 我们现在要实现一个红绿灯，把一个圆形 div 按照绿色 3 秒，黄色 1 秒，红色 2 秒循环改变背景色
let light = ''

const sleep = time =>
  new Promise(r =>
    setTimeout(() => {
      r()
    }, time)
  )

async function run() {
  while (true) {
    light = 'green'
    await sleep(3000)
    light = 'yellow'
    await sleep(1000)
    light = 'red'
    await sleep(2000)
  }
}

run()

setInterval(() => {
  console.log(light)
}, 500)
