import React, {Component} from 'react'
import {render} from 'react-dom'

import './style.css'
import Example from '../../src'

import IModal from '../../src/index'

class Demo extends Component {
  constructor() {
    super()

    this.state = {
      open: false
    }
  }

  render() {
    return( 
      <div className="container">
        
        <a href="https://github.com/iagorm/react-imodal">
          <img style={{position: 'absolute', top: 0, right: 0, border: 0}} src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png" alt="Fork me on GitHub" />
        </a>

        <h1>react-imodal Component</h1>
        <h2>by Iagor Moraes</h2>
        
        <a href="https://www.npmjs.com/package/react-imodal"><img src="https://img.shields.io/badge/npm-v1.1.7-blue.svg"/></a><br/>
        
        <button onClick={() => this.setState({open: true})}>Click to open Modal</button>
        
        <a href="https://github.com/iagorm/react-imodal" style={{marginTop: 15, color: 'white'}}>Read the documentation</a>
        <a style={{marginTop: 10}} href="https://twitter.com/intent/tweet?text=Get react-imodal today, a easy modal component built in React plug-n-play: https://github.com/iagorm/react-imodal" target="_blank"><img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter"/></a>

        <Example/>

        <IModal desktopDraggable={true} className={"mymodal"} open={this.state.open} onClose={() => this.setState({open: false})}/>
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
