const dep = {}

function EventEmitter (name) {

}

const p1 = new EventEmitter('p1')
p1.sub(() => {
  console.log('p1')
})
