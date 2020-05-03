import { renderComponent } from './renderComponent'

/**
componentWillMount
componentWillReceiveProps
 */

function setComponentProps(component, props) {
  if (!component.base) {
    if (component.componentWillMount) component.componentWillMount()
  } else if (component.componentWillReceiveProps) {
    component.componentWillReceiveProps(props)
  }

  component.props = props

  renderComponent(component)
}

export { setComponentProps }
