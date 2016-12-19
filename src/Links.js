import React from 'react'
// import { connect } from 'react-redux'
import { Link } from 'react-router' // browerHistory

const Links = () => (
  <header>
    Links:
    {' '}
    <Link to='/drumkit'>Drumkit</Link>
  </header>
)

export default Links
