import React, { PropTypes } from 'react'
import Welcome from './Welcome'
import { connect } from 'react-redux'
import { updateString, submitName } from './actions'

const mapStateToProps = (state) => {
  return {
    name: state.updateString
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (str) => {
      dispatch(updateString(str))
    },
    onSubmit: (str) => {
      dispatch(submitName(str))
    }
  }
}

const NameInputEl = ({ name, onChange, onSubmit }) => {
  const onClickHandler = (e) => {
    e.preventDefault()
    onSubmit(name)
  }

  return (
    <div>
      <Welcome name={name} />
      <form>
        <input type="text" placeholder="enter account name" onChange={(e) => onChange(e.target.value)} />
        <button onClick={onClickHandler}>Submit</button>
      </form>
    </div>
  )
}

NameInputEl.PropTypes = {
  str: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const NameInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(NameInputEl)

export default NameInput
