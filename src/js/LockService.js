// 1、基于Promise的锁实现
// 考虑在单进程单线程下的锁实现，基于下面的代码片段实现 LockService 类
class LockService {
  // 队列，状态 islocked，入队 true，再入 等待，出队 false，下一个
  async lockByKey(key) {
    console.log('key', key)
    this[key] = this[key] || {}

    this[key].key = key
    this[key].islocked = this[key].islocked || false

    if (this[key].queue) {
      this[key].queue.push(key)
    } else {
      this[key].queue = [key]
    }

    function run() {
      // const len = this[key].queue.length
      // let i = 0

      while (this[key].islocked) {}
      this[key].islocked = true

      return {
        release: () => {
          console.log('release')
          console.log(this[key])
          this[key].islocked = false

        },
      }
    }
    return run()
  }
}

const lockService = new LockService()

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function process(key) {
  // 同一个key会被锁住，不同的key不受影响
  let locker = await lockService.lockByKey(key)
  console.log('get locker', key)
  try {
    // 停留1s
    await delay(1000)
  } finally {
    console.log('end locker', key)
    locker.release()
  }
}

process('key1')
process('key1')
process('key2')

// get locker key1
// get locker key2
// 1s后
// end locker key1
// end locker key2
// get locker key1
// 1s后
// end locker key1

// 2、基于Promise的执行数量控制
// class PromiseLimit<T> {
//   constructor(private limit: number) {}

//   waitForFree() {}

//   runTask(task: () => Promise<T>)
// }

// async function main() {
//   let limit = new PromiseLimit<void>(3)
//   for (let i = 0; i < 1000; i++) {
//     await limit.waitForFree()
//     limit.runTask(async () => {
//       /// 耗时任务，PromiseLimit会保证最多同时运行三个，第四个会被卡在waitForFree里
//       /// 一旦有任务完成，后续任务自动执行
//     })
//   }
// }
