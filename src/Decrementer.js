import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { decrement } from './actions'

const mapStateToProps = (state) => {
  return {
    num: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (num) => {
      dispatch(decrement(num))
    }
  }
}

const DecrementBtn = ({ num, onClick }) => (
  <button onClick={() => onClick(num - 1)}>Decrement</button>
)

DecrementBtn.PropTypes = {
  num: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

const Decrementer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DecrementBtn)

export default Decrementer
