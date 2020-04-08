let has = {}
let quene = []
let waiting = false

function batchUpdate(watcher) {
  // console.log(watcher)
  const idx = watcher.idx
  console.log('===batchUpdate', 'idx', idx)
  if (!has[idx]) {
    has[idx] = true
    quene.push(watcher)
    console.log('idx', idx, 'waiting', waiting)
    if (!waiting) {
      waiting = true
      flush()
    } else {
      console.log('===flush has started, just set new val')
    }
  } else {
    console.log('===watcher exist pass flush')
  }
}

function flush() {
  console.log('===start flush once each eventloop')
  console.log(quene)
  Promise.resolve().then(() => {
    console.log('===start nextTick render')
    quene.forEach(watcher => watcher.render())
    reset()
  })
}

function reset () {
  has = {}
  quene = []
  waiting = false
}
