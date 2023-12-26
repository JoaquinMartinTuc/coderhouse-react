import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import ProductId from './components/ProductId'
import Category from './components/Category'

const App = () => {


  return (
    <BrowserRouter>

      <NavBar />


    
      <Routes>

      <Route path='/' element={<ItemListContainer />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/producto/:id' element={<ItemDetailContainer />} />
      <Route path='/categoria/:category' element={<ItemListContainer />} />




      </Routes>



    </BrowserRouter>
  )
}

export default App