const {SyncHook,AsyncParallelHook}=require('tapable')

class MyPlugin {
  constructor(options) {
    this.options = options
    console.log('>>>plugin')
    console.log(this)
    console.log(options)
  }

  apply(compiler) {
    console.log('>>>apply my plugin')
    compiler.hooks.myHook = new SyncHook(['myHookParam'])
    compiler.hooks.myAsyncHook = new AsyncParallelHook(['myAsyncHookParam'])

    compiler.hooks.environment.tap('env tap', stats => {
      console.log('>>>in env tap')
      compiler.hooks.myHook.call('call myHook param')
      compiler.hooks.myAsyncHook.callAsync('call myAsyncHook param', data => {
        console.log('>>>callAsync cb', data)
      })
  })

    compiler.hooks.done.tap('done tap', stats => {
      console.log('>>>in done tap')
    })
  }
}

module.exports = MyPlugin
