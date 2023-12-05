import React from 'react'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <Flex>
                <Spacer />
                <Box p='4' >
                    {greeting}
                </Box>
                <Spacer />
            </Flex>
        </div>
    )
}

export default ItemListContainer