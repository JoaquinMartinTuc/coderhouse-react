import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Card, CardHeader, Heading, CardBody, Stack, Image, Text, CardFooter, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './style.css';



const Cart = () => {

  const { cart, precioTotalCarrito, vaciarCart, eliminarProducto } = useContext(CartContext);

  const handleVaciarCart = () => {
    vaciarCart()
  }


  return (
    <div className='carrito'>

      <Card>
        <CardHeader>
          <Heading size='md'>Carrito de compras</Heading>
        </CardHeader>

        <CardBody>

          {
            cart.map((ind) => (

              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                key={ind.id}
              >
                <Image
                  objectFit='cover'
                  maxW={{ base: '100%', sm: '200px' }}
                  src={ind.imagenUrl}
                  alt={ind.alt}
                />

                <Stack>
                  <CardBody>
                    <Heading size='md'>{ind.titulo}</Heading>

                    <Text py='0.5'>
                      Categoria: {ind.categoria}
                    </Text>
                    <Text py='0.5'>
                      Precio por unidad: ${ind.precio}
                    </Text>
                    <Text py='0.5'>
                      Unidades: {ind.contador}
                    </Text>
                  </CardBody>

                  <CardFooter>
                    <Button variant='solid' colorScheme='blue'
                      onClick={() => eliminarProducto(ind.id)} >
                      Eliminar producto
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
            ))
          }

        </CardBody>
      </Card >


      {
        cart.length > 0 ?
          <>
            <p className='precioTotal'>Precio Total: ${precioTotalCarrito()}</p>
            <Stack direction='row' spacing={4} >
              <Button colorScheme='teal' variant='solid' onClick={handleVaciarCart} >
                Vaciar Carrito
              </Button>
              <Link to={"/carrito/pedido"}>
                <Button colorScheme='teal' variant='solid'>
                  Ordenar pedido
                </Button>
              </Link>
            </Stack>
          </>
          :
          <Stack spacing={3}>

            <p className='precioTotal'>El carrito se encuentra vacio...</p>

            <Link to={"/"} >
              <Button colorScheme='teal' variant='solid' onClick={handleVaciarCart} >
                Ver productos
              </Button>
            </Link>

          </Stack>
      }

    </div>
  )
}

export default Cart