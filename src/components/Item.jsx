import React from 'react'
import { Card, Image, Stack, CardBody, Heading, CardFooter, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import './style.css'

const Item = ({ titulo, id, imagenUrl, alt }) => {
    return (
        <section className='fondo'>
            <Card maxW='sm'>

                <CardBody>
                    <Image
                        src={imagenUrl}
                        alt={alt}
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{titulo}</Heading>

                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button>
                            <Link to={`/producto/${id}`}>
                                Ver detalle
                            </Link>
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>


        </section>
    )
}

export default Item