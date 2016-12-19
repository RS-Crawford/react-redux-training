const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return action.num
    case 'DECREMENT':
      return action.num
    default:
      return state
  }
}

const updateString = (state = 'you must be new here', action) => {
  switch (action.type) {
    case 'UPDATE_STRING':
      return action.str
    default:
      return state
  }
}

const setName = (state = 'New User', action) => {
  switch (action.type) {
    case 'SUBMIT_NAME':
      return action.name
    default:
      return state
  }
}

// const updateCardName = (state = '', action) => {
//   switch (action.type) {
//     case 'UPDATE_CARD_NAME':
//       return action.str
//     default:
//       return state
//   }
// }

// const updateCardRequestStatus = (state = false, action) => {
//   switch (action.type) {
//     case 'REQUEST_PENDING':

//   }
// }

const counterApp = {
  counter,
  updateString,
  setName
}

export default counterApp
