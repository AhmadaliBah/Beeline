import React, { useState } from 'react'
import {SearchIcon} from '@chakra-ui/icons'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Slide, 
    Box, 
    CloseButton, 
    Input

} from '@chakra-ui/react'
import Kirish from './Kirish'
import Drawer1 from './Drawer'

const Navbar2 = () => {
    const { isOpen, onToggle  } = useDisclosure()
return (
    <div>
        <Slide direction='top' in={isOpen} style={{ zIndex: 10 }}>
        <Box
            p='40px'
            mt='4'
            color='BlackAlpha 800'
            bg='white'
            rounded='md'
            shadow='md'
        >
            <h1 className="search__title">Qidiruv so'zini kiriting</h1>
            <Box display='flex' alignItems='center' position="relative">
            <Input placeholder='Masalan: internet paketlar' size='md'/>
            <SearchIcon position="absolute" right="10px" w={5} h={5}/>
            </Box>
            <CloseButton in={isOpen} onClick={onToggle} position='absolute' top='20px' right='20px'/>
        </Box>
        </Slide>
        <nav className="navbar2">
            <a className='language' href="">РУС</a>
            <a className='search' onClick={onToggle}>
                <SearchIcon w={5} h={5}/>
            </a>
            <Kirish />
            <Drawer1 />
        </nav>
    </div>
)
}

export default Navbar2