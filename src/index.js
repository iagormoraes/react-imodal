import React, {Component} from 'react'
import IModal from './IModal/IModal.js'

export default class extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to React components</h2>

        <IModal
          open={true}
        />
      </div>
    )
  }
}
