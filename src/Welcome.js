import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    name: state.updateString
  }
}

const DisplayEl = ({ name }) => (
  <h1>Hello, {name}.</h1>
)

DisplayEl.propTypes = {
  name: PropTypes.string.isRequired
}

const Welcome = connect(mapStateToProps)(DisplayEl)

export default Welcome


