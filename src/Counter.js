import React from 'react'
import CounterDisplay from './CounterDisplay'
import Incrementer from './Incrementer'
import Decrementer from './Decrementer'

const Counter = () => (
  <div>
    <CounterDisplay />
    <Incrementer />
    <Decrementer />
  </div>
)

export default Counter
