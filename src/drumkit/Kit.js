import React from 'react'
import Key from './Key'

const Kit = () => {
  return (
    <div className="kit">
      <Key key="65" letter="A" sound="clap" />
      <Key key="83" letter="S" sound="hihat" />
      <Key key="68" letter="D" sound="kick" />
      <Key key="70" letter="F" sound="openhat" />
      <Key key="71" letter="G" sound="kick" />
      <Key key="72" letter="H" sound="ride" />
      <Key key="74" letter="J" sound="snare" />
      <Key key="75" letter="K" sound="tom" />
      <Key key="76" letter="L" sound="tink" />
    </div>
  )
}

export default Kit
