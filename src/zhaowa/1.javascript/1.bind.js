/**
 * 手写 bind
 * 1. 存放位置，Function.prototype
 * 2. bind => 改变上下文，传入参数 newThis + args1~argsn
 * 3. return fn => 上下文被改变的函数（原函数参数不变）=> 返回函数包裹的 apply
 * 4. 实现 apply，改变 this
 */
Function.prototype.newBind = function () {
  // this 指向执行函数，prototype 上有 newApply
  const _this = this
  const args = Array.prototype.slice.call(arguments)
  const newThis = args.shift()

  return function () {
    // this 指向 window，不存在 newApply
    return _this.newApply(newThis, args)
  }
}

Function.prototype.newApply = function (context) {
  context = context || window

  // this 指向执行的函数，将函数的执行对象修改为新的context
  context.fn = this

  // apply 第二个参数为数组
  const result = arguments[1] ? context.fn(...arguments[1]) : context.fn()

  // 删除临时挂载函数
  delete context.fn

  return result
}
