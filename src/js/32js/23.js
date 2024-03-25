/**
 * 23.Promise并行限制
 * https://juejin.cn/post/6854573217013563405
 */

// JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。完善下面代码的Scheduler类，使以下程序能够正常输出：

class Scheduler {
  queue = []
  jobs = []
  running = false

  add(promiseCreator) {
    this.queue.push(promiseCreator)
    this.run()
  }

  run() {
    // 限制两个
    if (this.jobs.length < 2) {
      const f = this.queue.shift()
      this.jobs.push(f)
      return
    }

    // 只执行一次 job
    if (this.running) return

    console.log('run')
    this.running = true

    this.jobs.forEach((f, i) => {
      const loop = (fn, i) => {
        if (typeof fn !== 'function') return
        // 每个 job 执行完后，取一个 queue
        fn().then(() => {
          this.jobs[i] = this.queue.shift()
          loop(this.jobs[i], i)
        })
      }
      loop(f, i)
    })
  }
}

const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time)
  })

const scheduler = new Scheduler()

const addTask = (time, order) => {
  scheduler.add(() => timeout(time).then(() => console.log(order)))
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')

// output: 2 3 1 4
