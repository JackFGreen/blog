class Dep {
  constructor() {
    console.log('===dep')
    console.log(this)
    this.subs = []
  }

  add(sub) {
    this.subs.push(sub)
  }

  pub() {
    this.subs.forEach(sub => {
      sub.update()
    })
  }
}
