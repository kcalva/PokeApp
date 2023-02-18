import React, { useEffect, useState } from "react"
import logo from "./assets/images/logo.png"
import "./App.css"
import { getPokeTypes } from "./API/API"

const App = () => {
  const [typeData, setTypeData] = useState()
  useEffect(() => {
    let fetchData = async () => {
      let pokeTypesInfo = await getPokeTypes()
      setTypeData(pokeTypesInfo)
    }
    fetchData()
  })
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="App-header">Kevin's Pokemon App</div>
      {typeData
        ? Object.keys(typeData).map((typeName, index) => {
            return (
              <div id={`Type-${index + 1}`} className="Type-name" key={index}>
                {typeName.toUpperCase()}
              </div>
            )
          })
        : null}
    </div>
  )
}

export default App
