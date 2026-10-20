import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'

function App() {
  return (
    <>
    <Header />
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path='/index.html' element = {<Home/>}/>
          <Route path='/about.html' element = {<About/>}/>
          <Route path='/cart.html' element = {<Cart/>}/>
        </Routes>
      </BrowserRouter>
    <Footer />
    </>
  )
}

export default App