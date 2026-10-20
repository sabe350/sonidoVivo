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
import { Product1, Product10, Product101, Product102, Product103, Product104, Product12, Product13, Product14, Product15, Product2, Product21, Product22, Product23, Product24, Product3, Product31, Product32, Product4, Product41, Product42, Product43, Product44, Product5, Product51, Product52, Product53, Product6, Product61, Product62, Product63, Product7, Product71, Product72, Product73, Product8, Product81, Product82, Product83, Product84, Product85, Product9, Product91, Product92, Product93, Product94, Product95, Product96, Product97, Product98, Product99 } from './components/Product'

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
          <Route path='/prodpage1.html' element = {<Product1/>}/>
          <Route path='/prodpage2.html' element = {<Product12/>}/>
          <Route path='/prodpage3.html' element = {<Product13/>}/>
          <Route path='/prodpage4.html' element = {<Product14/>}/>
          <Route path='/prodpage5.html' element = {<Product15/>}/>
          <Route path='/prodpage21.html' element = {<Product2/>}/>
          <Route path='/prodpage22.html' element = {<Product21/>}/>
          <Route path='/prodpage23.html' element = {<Product22/>}/>
          <Route path='/prodpage24.html' element = {<Product23/>}/>
          <Route path='/prodpage25.html' element = {<Product24/>}/>
          <Route path='/prodpage31.html' element = {<Product3/>}/>
          <Route path='/prodpage32.html' element = {<Product31/>}/>
          <Route path='/prodpage33.html' element = {<Product32/>}/>
          <Route path='/prodpage41.html' element = {<Product4/>}/>
          <Route path='/prodpage42.html' element = {<Product41/>}/>
          <Route path='/prodpage43.html' element = {<Product42/>}/>
          <Route path='/prodpage44.html' element = {<Product43/>}/>
          <Route path='/prodpage45.html' element = {<Product44/>}/>
          <Route path='/prodpage51.html' element = {<Product5/>}/>
          <Route path='/prodpage52.html' element = {<Product51/>}/>
          <Route path='/prodpage53.html' element = {<Product52/>}/>
          <Route path='/prodpage54.html' element = {<Product53/>}/>
          <Route path='/prodpage61.html' element = {<Product6/>}/>
          <Route path='/prodpage62.html' element = {<Product61/>}/>
          <Route path='/prodpage63.html' element = {<Product62/>}/>
          <Route path='/prodpage64.html' element = {<Product63/>}/>
          <Route path='/prodpage71.html' element = {<Product7/>}/>
          <Route path='/prodpage72.html' element = {<Product71/>}/>
          <Route path='/prodpage73.html' element = {<Product72/>}/>
          <Route path='/prodpage74.html' element = {<Product73/>}/>
          <Route path='/prodpage81.html' element = {<Product8/>}/>
          <Route path='/prodpage82.html' element = {<Product81/>}/>
          <Route path='/prodpage83.html' element = {<Product82/>}/>
          <Route path='/prodpage84.html' element = {<Product83/>}/>
          <Route path='/prodpage85.html' element = {<Product84/>}/>
          <Route path='/prodpage86.html' element = {<Product85/>}/>
          <Route path='/prodpage91.html' element = {<Product9/>}/>
          <Route path='/prodpage92.html' element = {<Product91/>}/>
          <Route path='/prodpage93.html' element = {<Product92/>}/>
          <Route path='/prodpage94.html' element = {<Product93/>}/>
          <Route path='/prodpage95.html' element = {<Product94/>}/>
          <Route path='/prodpage96.html' element = {<Product95/>}/>
          <Route path='/prodpage97.html' element = {<Product96/>}/>
          <Route path='/prodpage98.html' element = {<Product97/>}/>
          <Route path='/prodpage99.html' element = {<Product98/>}/>
          <Route path='/prodpage910.html' element = {<Product99/>}/>
          <Route path='/prodpage101.html' element = {<Product10/>}/>
          <Route path='/prodpage102.html' element = {<Product101/>}/>
          <Route path='/prodpage103.html' element = {<Product102/>}/>
          <Route path='/prodpage104.html' element = {<Product103/>}/>
          <Route path='/prodpage105.html' element = {<Product104/>}/>
        </Routes>
      </BrowserRouter>
    <Footer />
    </>
  )
}

export default App