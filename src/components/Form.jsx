import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useState } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { Text, FormControl, FormLabel, Input,  Button } from '@chakra-ui/react';


const Form = () => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState("");

    const { cart } = useContext(CartContext)


    const db = getFirestore()

    const handleSubmit = (e) => {
        
        e.preventDefault();

        addDoc(ordersCollection, order).then(({id}) =>
            setOrderId(id))
        
    }
     
    const order = {
       cliente: { nombre, email},
       items: cart,
    }

    const ordersCollection = collection(db, "orden")
        
        

        
    

  return (

    <div className='carrito'>

        <h1 className='precioTotal'>
        Complete el formulario para continuar con la compra.
        </h1>

        <FormControl isRequired>
            <form action="" onSubmit={handleSubmit}>
                <FormLabel className='precioTotal'>Nombre</FormLabel>
                <Input type="text" placeholder='Nombre' className='letras' onChange={(e) => setNombre(e.target.value)} value={nombre} />
                <FormLabel className='precioTotal'>Email</FormLabel>
                <Input type="email" placeholder='Email' className='letras' onChange={(e) => setEmail(e.target.value)} value={email} />

                <Button type='submit' colorScheme='teal' size='md' mt='3' >
                    Enviar pedido
                </Button>
            </form>
        </FormControl>

        <Text className='precioTotal'>El id de tu compra es: {orderId}, pronto nos contactaremos.</Text>
    </div>

  )
}

export default Form