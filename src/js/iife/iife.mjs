function iife() {
  console.log('run iife')
  const o = {
    name: 'iife',
  }
  return {
    a() {
      console.log('run a')
      return o
    },
  }
}

const { a } = iife()

console.log('before export')
export { a }
