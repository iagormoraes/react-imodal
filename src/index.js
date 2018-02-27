import React, {Component} from 'react'
import IModal from './IModal/IModal.js'

export default class extends Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }
  
  render() {
    return (
      <div>
        <h2 onClick={() => this.setState({open: true})}>Welcome to React components</h2>

        <IModal
          open={this.state.open}
          onClose={() => this.setState({open: false})}
        />
      </div>
    )
  }
}
