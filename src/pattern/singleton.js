const singleton = (function() {
  let instance
  function init() {
    return {
      name: 'singleton'
    }
  }

  return {
    getInstance() {
      console.log(instance)
      if (!instance) {
        instance = init()
      }
      return instance
    }
  }
})()
const single = singleton.getInstance()
const single2 = singleton.getInstance()
console.log(single, single2, single === single2)
