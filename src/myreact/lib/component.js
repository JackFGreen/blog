import { renderComponent } from './renderComponent'

class Component {
  constructor(props) {
    this.state = {}
    this.props = props
  }

  setState(stateChange) {
    enqueueState(stateChange, this)
  }
}

const queue = []
const renderQueue = []

function enqueueState(stateChange, component) {
  if (!queue.length) Promise.resolve().then(flush)

  queue.push({
    stateChange,
    component,
  })

  if (!renderQueue.find((o) => o === component)) renderQueue.push(component)
}

function flush() {
  let item, component

  while ((item = queue.shift())) {
    const { stateChange, component } = item

    if (!component.prevState) component.prevState = Object.assign({}, component.state)

    if (typeof stateChange === 'function') {
      Object.assign(component.state, stateChange(component.prevState, component.props))
    } else {
      Object.assign(component.state, stateChange)
    }

    component.prevState = component.state
  }

  while ((component = renderQueue.shift())) {
    renderComponent(component)
  }
}

export { Component }
