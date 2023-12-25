import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Home from './components/Home'
import About from './components/About'
import ContactUs from './components/ContactUs'
import Cart from './components/Cart'
import ProductId from './components/ProductId'
import Category from './components/Category'

const App = () => {


  return (
    <BrowserRouter>

      <NavBar />

      {/* <ItemListContainer greeting={"Bienvenido al eCommerce de Cens Sport"} /> */}

      {/* <ItemDetailContainer /> */}

      <Routes>

      <Route path='/' element={<ItemListContainer />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<ContactUs />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/producto/:id' element={<ItemDetailContainer />} />
      <Route path='/categoria/:category' element={<ItemListContainer />} />




      </Routes>



    </BrowserRouter>
  )
}

export default App