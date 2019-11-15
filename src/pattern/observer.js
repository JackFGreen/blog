const observer = {
  obs: [],
  add(o){
    if (!this.obs.includes(o)) this.obs.push(o)
  },
  del(o){
    const i = this.obs.findIndex(e => e === o)
    this.obs.splice(i, 1)
  },
  pub(){
    this.obs.forEach(fn => fn())
  }
}

const obs1 = function obs1 () {
  console.log('obs1')
}
const obs2 = function obs2 () {
  console.log('obs2')
}

observer.add(obs1)
observer.add(obs2)
observer.pub()
console.log(observer)
console.log('---')

observer.del(obs1)
observer.pub()
console.log(observer)
