import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react'

const NavBar = () => {
    return (
        <div>

            <Flex>
                <Box p='4'>
                    Cens Sport
                </Box>
                <Spacer />

                <Menu>
                    <MenuButton>
                        Categorias
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Remeras</MenuItem>
                        <MenuItem>Abrigos</MenuItem>
                        <MenuItem>Pantalones</MenuItem>
                        <MenuItem>Calzas</MenuItem>
                    </MenuList>
                </Menu>

                <Spacer />
                <Box p='4'>
                    <CartWidget />
                </Box>
            </Flex>

        </div>
    )
}

export default NavBar