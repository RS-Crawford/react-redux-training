import React from 'react'

const Key = (props) => {
  const html = (
    <div data-key="${props.key}" className="key">
      <kbd>{props.letter}</kbd>
      <span className="sound">{props.sound}</span>
    </div>
  )

  return html
}

export default Key
