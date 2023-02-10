import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import Map from '../assets/icons/marker.png'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
} from '@chakra-ui/react';

import '../styles/navbar.css'
import Menu from '../assets/icons2/menu-burger.png'
import Logo from '../assets/icons2/main-logo.svg'

const Drawer1 = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    let activeStyle = {
        borderBottom: '2px solid #FFC800',
    };
return (
    <div>
        <button className='drawer__btn' onClick={onOpen}>
            <img src={Menu} alt="" />
        </button>
        <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"md"}
        >
        <DrawerOverlay />
        <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader bg="#f1f2f3">
                <img src={Logo} alt="" />
            </DrawerHeader>

            <DrawerBody pt="5">
                <div className='drawer__box'>
                    <NavLink onClick={onClose} style={({ isActive }) => isActive ? activeStyle : undefined} to={'/'} className="nav-item">Jismoniy shaxslar uchun</NavLink>
                    <NavLink onClick={onClose} style={({ isActive }) => isActive ? activeStyle : undefined} to={'/b2b/uz/'} className="nav-item">Yuridik shaxslar uchun</NavLink>
                </div>
                <ol className="drawer__items">
                    <Link onClick={onClose} to={'/tariflar'} className="drawer__item"><span>01</span>TARIFLAR</Link>
                    <Link onClick={onClose} to={'/internet-paketlar'} className="drawer__item"><span>02</span>INTERNET-PAKETLAR</Link>
                    <Link onClick={onClose} to={'/beeline club'} className="drawer__item"><span>03</span>BEELINE CLUB 2.0</Link>
                    <Link onClick={onClose} to={'/rouming'} className="drawer__item"><span>04</span>ROUMING</Link>
                    <Link onClick={onClose} to={'/xizmatlar'} className="drawer__item"><span>05</span>XIZMATLAR</Link>
                    <Link onClick={onClose} to={'/yangiliklar'} className="drawer__item"><span>06</span>YANGILIKLAR</Link>
                    <Link onClick={onClose} to={'/aksiyalar'} className="drawer__item"><span>07</span>AKSIYALAR</Link>
                    <Link onClick={onClose} to={'/yordam'} className="drawer__item"><span>08</span>YORDAM</Link>
                </ol>
                <div className="toshkent" onClick={onOpen} style={{paddingTop: '20px'}}>
                <img src={Map} alt="" />
                <h5 className="map__text">Toshkent va Toshkent viloyati</h5>
                </div>
            </DrawerBody>
        </DrawerContent>
        </Drawer>
    </div>
)
}

export default Drawer1