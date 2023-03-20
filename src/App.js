import React, { useEffect, useState } from "react"
import "./App.css"
import { getPokeTypes } from "./API/API"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header, Navigation } from "../src/Components/index"
import Pokemain from "./Screens/Pokemain"
import Pokemon from "./Screens/Pokemon"
import OmniAural from "omniaural"
import { initialGlobalState } from "./initialGlobalState"
import { Main } from "../src/Components/index"

OmniAural.initGlobalState({
  ...initialGlobalState,
})

const App = () => {
  useEffect(() => {
    let fetchData = async () => {
      let pokeTypesInfo = await getPokeTypes()
      OmniAural.state.typeData.set(pokeTypesInfo)

      console.log("this is in omniaural ", OmniAural.state.typeData.value())
    }
    fetchData()
  }, [])
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route
              index
              element={
                <Main>
                  <Pokemain />
                </Main>
              }
            />
            <Route path="/pokemon" element={<Pokemon />} />
            {/* <Route path="/moves" element={null} /> */}
            {/* <Route path="/pastDamageRelations" element={null} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
