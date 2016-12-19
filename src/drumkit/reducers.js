const updatePressedKey = (state = '', action) => {
  switch (action.type) {
    case 'KEY_PRESSED':
      return action.key_code
    default:
      return state
  }
}

const drumkitKeys = (state = [], action) => {
  switch (action.type) {
    case 'KEY_PRESSED':
      return [
        ...state
      ]
    default:
      return state
  }
}

const key = (state = {}, action) => {
  switch (action.type) {
    case 'KEY_PRESSED':
      if (state.keyCode !== action.keyCode) {
        return state
      } else {
        return Object.assign({}, state, {
          active: !state.active
        })
      }
    default:
      return state
  }
}

const keys = (state = [], action) => {
  switch (action.type) {
    case 'KEY_PRESSED':
      return state.map(k =>
        key(k, action)
      )
    default:
      return state
  }
}

export default keys
