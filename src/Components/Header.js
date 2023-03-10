import React from 'react'
import logo from '../assets/images/logo.png'

function Header() {
  return (
    <>
        <img src={logo} className="App-logo" alt="logo" />
      <div className="App-header">Kevin's Pokemon App</div>
    </>
  )
}

export default Header