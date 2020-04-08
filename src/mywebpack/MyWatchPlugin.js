class MyWatchPlugin {
  apply(compiler) {
    console.log('>>>apply my watch plugin')

    compiler.hooks.myHook.tap('watch myHook tap', myHookParam => {
      console.log('>>>in watch myHook tap')
      console.log('>>>get myHookParam - ', myHookParam)
    })

    compiler.hooks.myAsyncHook.tapAsync('watch myAsyncHook tap', (data, cb) => {
      console.log('>>>in watch myAsyncHook tap')
      console.log(cb, data)
      setTimeout(() => {
        console.log('>>>start myAsyncHook callback')
        cb('>>>after 1000')
      }, 1000);
    })
  }
}

module.exports = MyWatchPlugin
