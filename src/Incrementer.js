import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { increment } from './actions'

const mapStateToProps = (state) => {
  return {
    num: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (num) => {
      dispatch(increment(num))
    }
  }
}

const IncrementBtn = ({ num, onClick }) => (
  <button onClick={() => onClick(num + 1)}>Increment</button>
)

IncrementBtn.PropTypes = {
  num: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

const Incrementer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IncrementBtn)

export default Incrementer
