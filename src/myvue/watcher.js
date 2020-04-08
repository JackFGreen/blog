let idx = 0
const renderVal = []

class Watcher {
  constructor(vm, el, binding) {
    console.log('===watcher')
    console.log(vm, el, binding)
    this.idx = idx++
    this.vm = vm
    this.el = el
    this.binding = binding

    Dep.target = this
    // run get
    this.oldVal = vm.data[binding]
    Dep.target = null
  }

  update() {
    console.log('===update')
    batchUpdate(this)
  }

  render() {
    console.log('===render')
    const newVal = this.vm.data[this.binding]
    console.log(this.binding, newVal, this.el)
    if (this.el instanceof HTMLInputElement) {
      this.el.value = newVal
      renderVal.push(newVal)
      console.log('renderVal', renderVal)
    } else {
      this.el.innerText = newVal
    }
  }
}
