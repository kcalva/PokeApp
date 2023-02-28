import React, { useEffect, useState } from "react"
import logo from "./assets/images/logo.png"
import "./App.css"
import { getPokeTypes } from "./API/API"
import Pokemain from "./Components/Pokemain"

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
      <Pokemain typeData={typeData} />
    </div>
  )
}

export default App
