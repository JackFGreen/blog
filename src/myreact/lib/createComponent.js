import { Component } from './component'

function createComponent(component, props) {
  let ins

  // class component
  if (component.prototype && component.prototype.render) {
    ins = new component(props)
  } else {
    // function component
    ins = new Component(props)
    ins.constructor = component
    ins.render = function () {
      return this.constructor(props)
    }
  }

  return ins
}

export { createComponent }
