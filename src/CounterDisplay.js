import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    num: state.counter
  }
}

const DisplayEl = ({ num }) => (
  <p>Number is: {num}</p>
)

DisplayEl.propTypes = {
  num: PropTypes.number.isRequired
}

const CounterDisplay = connect(mapStateToProps)(DisplayEl)

export default CounterDisplay
