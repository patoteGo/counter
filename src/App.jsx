import React from 'react'
// import Card from './Card.jsx'
import SecondsCounter from './SecondsCounter.jsx'
import './App.sass'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      seconds: 0,
    }
  }
  pad = (num, size) => {
    var s = num + ''
    while (s.length < size) s = '0' + s
    return s
  }
  cuenta = () => {
    setInterval(() => {
      this.setState({
        seconds: this.state.seconds + 1,
      })
    }, 1000)
  }

  componentDidMount() {
    this.cuenta()
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="counter">
            <SecondsCounter seconds={this.pad(this.state.seconds, 6)} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
