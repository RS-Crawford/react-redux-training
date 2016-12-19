export const increment = (num) => {
  return {
    type: 'INCREMENT',
    num: num
  }
}

export const decrement = (num) => {
  return {
    type: 'DECREMENT',
    num: num
  }
}

export const updateString = (str) => {
  return {
    type: 'UPDATE_STRING',
    str: str
  }
}

export const submitName = (name) => {
  return {
    type: 'SUBMIT_NAME',
    name: name
  }
}
