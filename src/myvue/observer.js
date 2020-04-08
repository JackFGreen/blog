class Observer {
  constructor(data) {
    Object.keys(data).forEach(k => {
      console.log('===observer')
      console.log(data, k)

      let oldVal = data[k]

      // 每个属性自己的依赖，闭包缓存
      // 比如 data.a 绑定了 2 个 dom，a 对应的 dep 就有 2 个 watcher
      // a 更新的时候就会 调用 2 次 update
      const dep = new Dep()

      Object.defineProperty(data, k, {
        get() {
          console.log('===get')
          if (Dep.target) {
            console.log(Dep.target)
            dep.add(Dep.target)
          }
          return oldVal
        },
        set(newVal) {
          console.log('===set')
          console.log(data, k, newVal)
          oldVal = newVal
          dep.pub()
        }
      })
    })
  }
}
