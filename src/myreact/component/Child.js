import React from 'react'
import { Component } from '../lib/component'

class Child extends Component {
  render() {
    return <div>Child Name: {this.props.name}</div>
  }
}

export default Child
