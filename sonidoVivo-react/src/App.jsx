import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Cart from './components/Cart'
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Category1, Category10, Category2, Category3, Category4, Category5, Category6, Category7, Category8, Category9 } from './components/Category'

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
          <Route path='/login.html' element = {<Login/>}/>
          <Route path='/signup.html' element = {<Signup/>}/>
          <Route path='/category1.html' element = {<Category1/>}/>
          <Route path='/category2.html' element = {<Category2/>}/>
          <Route path='/category3.html' element = {<Category3/>}/>
          <Route path='/category4.html' element = {<Category4/>}/>
          <Route path='/category5.html' element = {<Category5/>}/>
          <Route path='/category6.html' element = {<Category6/>}/>
          <Route path='/category7.html' element = {<Category7/>}/>
          <Route path='/category8.html' element = {<Category8/>}/>
          <Route path='/category9.html' element = {<Category9/>}/>
          <Route path='/category10.html' element = {<Category10/>}/>
        </Routes>
      </BrowserRouter>
    <Footer />
    </>
  )
}

export default App