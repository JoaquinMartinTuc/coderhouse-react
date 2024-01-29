import React from 'react'
import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Divider, ButtonGroup, Flex, Spacer, Box } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import './style.css'

const ItemDetail = ({ producto }) => {





    return (
        <section className='fondo'>
            <Card maxW='sm'>



                <CardBody>
                    <Image
                        src={producto.imagenUrl}
                        alt={producto.alt}
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{producto.titulo}</Heading>
                        <Text color='blue.600' fontSize='2x1'>
                            Id: {producto.id}
                        </Text>
                        <Text color='blue.600' fontSize='2x1'>
                            ${producto.precio}
                        </Text>

                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <ItemCount item={producto} />
                    </ButtonGroup>
                </CardFooter>
            </Card >
        </section>
    )
}

export default ItemDetail