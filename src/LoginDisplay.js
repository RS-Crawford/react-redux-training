import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    name: state.setName
  }
}

const LoginDisplayEl = ({ name }) => (
  <h3>Logged in as: {name}</h3>
)

LoginDisplayEl.PropTypes = {
  name: PropTypes.string.isRequired
}

const LoginDisplay = connect(mapStateToProps)(LoginDisplayEl)

export default LoginDisplay
