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
  }, [])
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="App-header">Kevin's Pokemon App</div>
      {typeData
        ? Object.keys(typeData).map((typeName, index) => {
            return (
              <div key={index}>
                <div id={`Type-${index + 1}`} className="Type-name">
                  {typeName.toUpperCase()}
                </div>
                <div className="App-header">Weak against</div>
                {typeData[typeName].damage_relations.double_damage_from.map(
                  (x, index) => (
                    <div
                      id={`Type-${x.url.substr(-4, 3).split("/")[1]}`}
                      key={index}
                      className={"SubType-name"}
                    >
                      {x.name}
                    </div>
                  )
                )}
                <hr />
              </div>
            )
          })
        : null}
    </div>
  )
}

export default App
