import {React, useEffect, useState } from 'react'
import { Button, Stack, Alert, AlertIcon } from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ItemCount = (item) => {

    const {cart, setCart} = useContext(CartContext)

    const [contador, setContador] = useState(0)

    const sumar = () => {
      if (contador < 10) {
        setContador(contador + 1)
      } 
    }

    const restar = () => {
      if (contador > 0) {
        setContador(contador - 1)
      } 
    }

    const agregaralCarrito = () => {
      const itemAgregado = {...item.item, contador}
      
      const newCart = [...cart];
      const estaEnElCarrito = newCart.find((productos) => productos.id === item.item.id)


      if (estaEnElCarrito){
      console.log("Esta en el carrito")
      estaEnElCarrito.contador = estaEnElCarrito.contador + contador
      setCart(newCart)
      console.log(cart)
    } else {
      console.log("no esta en el carrito")
      setCart ( [...cart, itemAgregado] )
      console.log(cart)
    }

  }

  return (
    <div className='divDeContador'>

        <p className='pDeContador'>{contador}</p>

        <Button colorScheme='teal' size='xs' onClick = {restar}>-</Button>

        <Button onClick = {agregaralCarrito} className='botonAgregarCarrito'>Agregar al carrito</Button>

        <Button colorScheme='teal' size='xs' onClick = {sumar}>+</Button>

        

    </div>


  )
}

export default ItemCount