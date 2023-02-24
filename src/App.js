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
                <div
                  id={typeName.charAt(0).toUpperCase() + typeName.slice(1)}
                  className="Type-name"
                >
                  {typeName.toUpperCase()}
                </div>
                {typeData[typeName].damage_relations.double_damage_from.map(
                  (typeDoubleDamage, index) => {
                    let typeName =
                      typeDoubleDamage.name.charAt(0).toUpperCase() +
                      typeDoubleDamage.name.slice(1)
                    return (
                      <div id={typeName} key={index} className={"SubType-name"}>
                        {typeName}
                      </div>
                    )
                  }
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
