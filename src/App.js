import React, { useEffect, useState } from "react"
import "./App.css"
import { getPokeTypes } from "./API/API"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header, Navigation } from "../src/Components/index"
import Pokemain from "./Screens/Pokemain"
import Pokemon from "./Screens/Pokemon"

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
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Pokemain typeData={typeData} />} />
            <Route path="/pokemon" element={<Pokemon typeData={typeData} />} />
            {/* <Route path="/moves" element={null} /> */}
            {/* <Route path="/pastDamageRelations" element={null} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
