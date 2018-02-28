import React, {Component} from 'react'
import {render} from 'react-dom'

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
      <div>
        <h1 onClick={() => this.setState({open: true})}>react-imodal Demo</h1>
        <Example/>

        <IModal desktopDraggable={true} className={"mymodal"} open={this.state.open} onClose={() => this.setState({open: false})}/>
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
