import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import Form from './components/Form'
import CartProvider from './context/CartContext'

const App = () => {


  return (

    <CartProvider>


    <BrowserRouter>
      
        <NavBar />



        <Routes>

          <Route path='/' element={<ItemListContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/producto/:id' element={<ItemDetailContainer />} />
          <Route path='/categoria/:category' element={<ItemListContainer />} />
          <Route path='/carrito/pedido' element={<Form />} />


        </Routes>



      


    </BrowserRouter>

    </CartProvider>
  )
}

export default App