class Compile {
  constructor(vm) {
    console.log('===compile')
    const childs = vm.el.children
    console.log(childs)
    Array.prototype.slice.call(childs).forEach(el => {
      const attrName = el instanceof HTMLInputElement ? 'v-model' : 'v-bind'
      const binding = el.getAttribute(attrName)
      if (binding) new Watcher(vm, el, binding)

      if (attrName === 'v-model') {
        el.addEventListener('input', e => {
          const newVal = e.target.value
          vm.data[binding] = newVal
        })
      }
    })
  }
}
