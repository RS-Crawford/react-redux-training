import React, { Component } from 'react'
import { connect } from 'react-redux'
import { keyPressed } from './actions'

import Kit from './Kit'

const mapStateToProps = (state) => {
  return {
    keys: state.keys
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    dispatchKeycodeOnKeydown: (e) => {
      console.log('e: ', e)
      if (e.keyCode) {
        const pressedKeyCode = e.keyCode
        dispatch(keyPressed(pressedKeyCode))
      }
    }
  }
}

class DrumkitEl extends Component {
  componentDidMount () {
    const { dispatchKeycodeOnKeydown } = this.props
    document.addEventListener('keydown', dispatchKeycodeOnKeydown)
  }

  componentWillUnmount () {
    const { dispatchKeycodeOnKeydown } = this.props
    document.removeEventListener('keydown', dispatchKeycodeOnKeydown)
  }

  render () {
    return (
      <div><Kit /></div>
    )
  }
}

// function dispatchKeycodeOnKeydown (dispatch) {

//   if (e.keyCode) {
//     const pressedKeyCode = e.keyCode
//     dispatch(keyPressed(pressedKeyCode))
//   }
// }

// const Drumkit = () => {
  
// }

const Drumkit = connect(
  mapStateToProps,
  mapDispatchToProps
)(DrumkitEl)

export default Drumkit
