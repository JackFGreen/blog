import React from 'react'
import { Component } from '../lib/component'

class CurrentTime extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      time: new Date().toLocaleString(),
    }

    this.refreshTime = this.refreshTime.bind(this)
    this.setSync = this.setSync.bind(this)
    this.setAsync = this.setAsync.bind(this)
  }

  componentWillMount() {
    console.log('componentWillMount')
  }
  componentWillReciveProps() {
    console.log('componentWillReciveProps')
  }
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  componentDidMount() {
    console.log('componentDidMount')
  }

  refreshTime() {
    this.setState({
      time: new Date().toLocaleString(),
    })
  }

  setSync() {
    for (let i = 0; i < 3; i++) {
      this.setState((prevState) => {
        console.log('setSync', i, prevState.count)
        return {
          count: prevState.count + 1,
        }
      })
    }
  }

  setAsync() {
    for (let i = 0; i < 3; i++) {
      this.setState({
        count: this.state.count + 1,
      })
      console.log('setAsync', i, this.state.count)
    }
  }

  render() {
    console.log(this)
    return (
      <div>
        CurrentTime With life circle
        <p className='current-time'>
          <span style={{ fontSize: 20 }}>{this.props.name}: </span>
          <span className='time' style={{ color: 'red' }}>
            {this.state.time}
          </span>
        </p>
        <button onClick={this.refreshTime}>refresh time</button>
        <button onClick={this.setAsync}>setState async {this.state.count}</button>
        <button onClick={this.setSync}>setState sync {this.state.count}</button>
      </div>
    )
  }
}

export default CurrentTime
