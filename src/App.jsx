import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const fs = window.require('fs')

class App extends Component {
  state = {
    files: [],
  }

  componentDidMount = () => {
    fs.readdir('/', (err, files) => {
      if (err) {
        console.log(err)
        return
      }

      this.setState({ files })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Electron React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.jsx</code> and save to reload.
        </p>
        <ul>
          {this.state.files.map(f => (
            <li>{f}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
