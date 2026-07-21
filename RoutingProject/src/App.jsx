import React from "react"
import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Product from "./pages/Product"
import ProductDetails from "./pages/ProductDetails"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
     <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product" element={<Product/>} />
    </Routes>
     
    </>
  )
}

export default App
