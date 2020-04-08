class MVVM {
  constructor(opt) {
    console.log('===MVVM')
    this.el = opt.el
    this.data = opt.data
    console.log(opt)
    this.init()
  }

  init() {
    this.observeData()
    this.compile()
    // this.proxyData()
  }

  proxyData() {
    Object.keys(this.data).forEach(k => {
      this[k] = this.data[k]
    })
  }

  compile() {
    new Compile(this)
  }

  observeData() {
    new Observer(this.data)
  }
}
