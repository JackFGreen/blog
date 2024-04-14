class Vue {
  constructor(opt) {
    this.data = opt.data
    new Observer(this.data)
    new Compiler(this, opt.template)
  }
}

class Observer {
  constructor(data) {
    Object.keys(data).forEach((k) => {
      const v = data[k]
      Observer.reactive(data, k, v)
    })
  }
  static reactive(data, k, v) {
    const dep = new Dep()

    Object.defineProperty(data, k, {
      get() {
        dep.depend()
        return v
      },
      set(val) {
        v = val
        dep.pub()
      },
    })
  }
}

class Compiler {
  constructor(vm, template = []) {
    template.forEach((vnode) => {
      new Watcher(vm, vnode)
    })
  }
}

class Watcher {
  constructor(vm, vnode) {
    this.vm = vm
    this.vnode = vnode

    Dep.target = this
    console.log('----------watcher get:', vnode.model)
    vm.data[vnode.model]
    Dep.target = null

    this.update()
  }
  add(dep) {
    dep.add(this)
    console.log('----------add dep:', dep.subs)
  }
  update() {
    const v = this.vm.data[this.vnode.model]
    console.log('----------update:', this.vnode.render.name)
    this.vnode.render(v)
  }
}

class Dep {
  static target = null
  constructor() {
    this.subs = []
  }
  add(watcher) {
    this.subs.push(watcher)
  }
  depend() {
    if (Dep.target) {
      Dep.target.add(this)
    }
  }
  pub() {
    this.subs.forEach((watcher) => {
      watcher.update()
    })
  }
}
// ========================
const vm = new Vue({
  data: {
    a: 'a',
    b: 'b',
  },
  // data 改变自动 render
  template: [
    {
      model: 'a',
      render: function renderA(v) {
        console.log('>render a:', v)
      },
    },
    {
      model: 'a',
      render: function renderAPlus(v) {
        console.log('>render a+1:', v + 1)
      },
    },
    {
      model: 'b',
      render: function renderB(v) {
        console.log('>render b:', v)
      },
    },
  ],
})
console.log('vm.data.a:', vm.data.a)
console.log('vm.data.b:', vm.data.b)

console.log('===start set a => a-modify')
vm.data.a += '-modify'
console.log('===end set a')

console.log('===start set b => b-modify')
vm.data.b += '-modify'
console.log('===end set b')

console.log('vm.data.a:', vm.data.a)
console.log('vm.data.b:', vm.data.b)
