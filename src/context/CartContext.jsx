import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext(null)

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const contadorDeCart = () => {
      return cart.reduce ((acc, ind) => acc + ind.contador, 0);
    }

    const precioTotalCarrito = () => {
      return cart.reduce ((acc, ind) => acc + ind.precio * ind.contador, 0)
    }
    
    const vaciarCart = () => {
      setCart([])
    }

    const eliminarProducto = (id) => {
      setCart(cart.filter((ind) => ind.id !== id));
    }

    return(
        <CartContext.Provider value={{cart, setCart, contadorDeCart, precioTotalCarrito, vaciarCart, eliminarProducto}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider