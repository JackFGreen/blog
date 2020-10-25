import { _render } from './react-dom'

/**
  componentWillUpdate
render update dom
  componentDidUpdate
componentDidMount
 */

function renderComponent(component) {
  // 组件当前的 dom，第一次渲染没有，第二次开始才会有，会触发 update 勾子
  let base

  const renderer = component.render()

  // 上一次的 dom
  if (component.base && component.componentWillUpdate) {
    component.componentWillUpdate()
  }

  // 更新 dom
  base = _render(renderer)

  if (component.base) {
    // 第二次开始才有，base 更新完了
    if (component.componentDidUpdate) component.componentDidUpdate()
  } else if (component.componentDidMount) {
    // 第一次才有
    component.componentDidMount()
  }

  if (component.base && component.base.parentNode) {
    // 父节点 替换最新的 dom
    component.base.parentNode.replaceChild(base, component.base)
  }

  // 挂载 dom，用于生命周期判断
  component.base = base
  base._component = component
}

export { renderComponent }
