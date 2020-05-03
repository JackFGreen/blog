import { createComponent } from './createComponent'
import { setComponentProps } from './setComponentProps'

const ReactDom = {
  render(vnode, container) {
    // 多次调用会调用多次 container.appendChild 插入上次的末尾，需要先清空
    container.innerHTML = ''
    return render(vnode, container)
  },
}

function render(vnode, container) {
  // console.log(vnode, container)
  return container.appendChild(_render(vnode))
}

export function _render(vnode) {
  if (typeof vnode !== 'object') {
    const textNode = document.createTextNode(vnode)
    return textNode
  }

  // component
  if (typeof vnode.type === 'function') {
    const component = createComponent(vnode.type, vnode.props)

    // 调用 renderComponent -> dom -> render(dom)
    setComponentProps(component, vnode.props)

    // render child component
    const { children } = component.props
    if (children) renderChildren(children, component.base)

    return component.base
  }

  // dom
  const dom = document.createElement(vnode.type)
  const { props } = vnode

  Object.keys(props).forEach((attr) => {
    if (attr !== 'children') {
      const val = props[attr]
      setAttribute(dom, attr, val)
    }
  })

  const { children } = props
  if (children) renderChildren(children, dom)

  return dom
}

function setAttribute(dom, attr, val) {
  if (attr === 'className') attr = 'class'

  if (/on\w+/.test(attr)) {
    attr = attr.toLowerCase()
    dom[attr] = val
    return
  }

  if (attr === 'style') {
    if (!val || typeof val === 'string') {
      dom.style.cssText = val
    } else {
      for (const k in val) {
        if (val.hasOwnProperty(k)) {
          const value = val[k]
          dom.style[k] = typeof value === 'number' ? value + 'px' : value
        }
      }
    }
    return
  }

  if (attr in dom) {
    dom[attr] = val
  }
  if (val) {
    dom.setAttribute(attr, val)
  } else {
    dom.removeAttribute(attr)
  }
}

function renderChildren(children, parent) {
  if (Array.isArray(children)) {
    children.forEach((child) => render(child, parent))
  } else {
    render(children, parent)
  }
}

export default ReactDom
