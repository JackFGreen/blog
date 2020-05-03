import React from 'react'
import ReactDom from './lib/react-dom'
import Parent from './component/Parent'
import Child from './component/Child'
import CurrentTime from './component/CurrentTime'

const root = document.getElementById('root')

function run() {
  const App = (
    <div id='app' style='background: #ccc'>
      <h1>This is My React Demo</h1>

      <CurrentTime name='current-time' />

      <Parent name='p1'>
        <Child name='c1' />
      </Parent>

      <Parent name='p2'>
        <Child name='c2' />
        <Child name='c3' />
      </Parent>
    </div>
  )

  ReactDom.render(App, root)
}

run()
// setInterval(run, 1000)

// function Fn() {
//   return <div>Fn</div>
// }
// const fn = React.createElement(Fn)
// console.log(fn)

// class Cls extends React.Component {
//   render() {
//     return <div>Cls</div>
//   }
// }
// const cls = React.createElement(Cls)
// console.log(cls)
