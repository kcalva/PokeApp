import React, { useEffect, useState } from "react"
import logo from "./assets/images/logo.png"
import "./App.css"
import { getPokeTypes } from "./API/API"
import Pokemain from "./Components/Pokemain"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import NewComp from "./Components/NewComp"
import Layout from "./Components/Layout"
import Header from "./Components/Header"

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
          <Route path="/" element={<Layout />}>
            <Route index element={<Pokemain typeData={typeData} />} />
            <Route path="/new" element={<NewComp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
