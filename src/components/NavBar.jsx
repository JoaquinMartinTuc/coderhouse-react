import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import './style.css'

const NavBar = () => {
    return (
        <nav className='navBar'>

            <Flex>
                <Link to={"/"}>
                    <Box p='4' className='letras'>
                        Cens Sport
                    </Box>
                </Link>

                <Spacer />

                <Menu>
                    <MenuButton className='letras'>
                        Categorias
                    </MenuButton>
                    <MenuList>

                        <Link to={'/categoria/remeras'}>
                            <MenuItem>Remeras</MenuItem>
                        </Link>

                        <Link to={'/categoria/abrigos'}>
                            <MenuItem>Abrigos</MenuItem>
                        </Link>

                        <Link to={'/categoria/pantalones'}>
                            <MenuItem>Pantalones</MenuItem>
                        </Link>

                        <Link to={'/categoria/calzas'}>
                            <MenuItem>Calzas</MenuItem>
                        </Link>

                    </MenuList>
                </Menu>

                <Spacer />

                <Link to={"/cart"}>
                    <Box p='4'>
                        <CartWidget />
                    </Box>
                </Link>

            </Flex>

        </nav>
    )
}

export default NavBar