const eventEmitter = {
  list: {},
  on(type, fn) {
    this.list[type] = this.list[type] || []
    const list = this.list[type]
    list.push(fn)
  },
  off(type, fn) {
    this.list[type] = this.list[type] || []
    const list = this.list[type]
    const i = list.findIndex(e => e === fn)
    if (i) {
      list.splice(i, 1)
    }
  },
  publish(type) {
    this.list[type] = this.list[type] || []
    const list = this.list[type]
    list.forEach(fn => fn())
  }
}

eventEmitter.on('a', () => {
  console.log('a', 1)
})

function fn2() {
  console.log('a', 2)
}
eventEmitter.on('a', fn2)
eventEmitter.publish('a')

eventEmitter.off('a', fn2)
eventEmitter.publish('a')
