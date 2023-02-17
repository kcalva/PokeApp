import React, { useState } from "react"
import logo from "./assets/images/logo.png"
import "./App.css"
import { getPokeTypes } from "./API/API"

const App = () => {
  const [typeData, setTypeData] = useState()
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="App-container">
        <header className="App-header">Kevin's Pokemon App</header>
        <button
          className="Button"
          onClick={async () => {
            let pokeTypesInfo = await getPokeTypes()
            setTypeData(pokeTypesInfo)
          }}
        >
          Click on this to see api
        </button>
        <div>
          {
            //TODO: Change this into a method and style
            typeData
              ? Object.keys(typeData).map((item, index) => {
                  return <div key={index}>{item}</div>
                })
              : null
          }
        </div>
        <textarea
          className="Text-area"
          rows={25}
          cols={50}
          value={JSON.stringify(typeData)}
          readOnly={true}
        />
      </div>
    </div>
  )
}

export default App
