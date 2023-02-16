import React, { useState } from "react"
import logo from "./assets/images/logo.png"
import "./App.css"
import { getPokeTypes } from "./API/API"

const App = () => {
  // const [typesList, setTypesList] = useState([])
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <header className="App-header">Kevin's Pokemon App</header>
      <button onClick={getPokeTypes}>Click on this to see api</button>
    </div>
  )
}

export default App
