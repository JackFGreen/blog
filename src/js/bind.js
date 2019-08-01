const pp = {
  name: 'pp',
  say () {
    console.log(this.name)
  }
}

const dd = {
  name: 'dd'
}

const bind = (ctx, ...args) => {
  const fn = this
  return () => {
    fn.call(ctx, ...args)
  }
}

pp.say.bind(dd)()
