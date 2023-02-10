import {Link} from 'react-router-dom'
import '../styles/navbar.css'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,

} from '@chakra-ui/react'
import Map from '../assets/icons/marker.png'
import { useState } from 'react'

const NavbarMedium = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = useState('inside')
return (
    <div className="nav__med">
    <nav className="navbar3">
        <Link to={'/tariflar'} className="nav-items1">TARIFLAR</Link>
        <Link to={'/internet-paketlar'} className="nav-items1">INTERNET-PAKETLAR</Link>
        <Link to={'/beeline club'} className="nav-items1">BEELINE CLUB 2.0</Link>
        <Link to={'/rouming'} className="nav-items1">ROUMING</Link>
        <Link to={'/xizmatlar'} className="nav-items1">XIZMATLAR</Link>
        <Link to={'/yangiliklar'} className="nav-items1">YANGILIKLAR</Link>
        <Link to={'/aksiyalar'} className="nav-items1">AKSIYALAR</Link>
        <Link to={'/yordam'} className="nav-items1">YORDAM</Link>
    </nav>
<Modal isOpen={isOpen} onClose={onClose} scrollBehavior={scrollBehavior}>
    <ModalOverlay />
    <ModalContent  h='500px' w='500px' p="20px">
    <ModalCloseButton className='close'/>
    <ModalBody pt='10' className='modal'>
        <ul className="viloyatlar">
            <li className="viloyat">Toshkent va Toshkent viloyati</li>
            <li className="viloyat">Sirdaryo viloyati</li>
            <li className="viloyat">Samarqand viloyati</li>
            <li className="viloyat">Jizzax viloyati</li>
            <li className="viloyat">Navoiy viloyati</li>
            <li className="viloyat">Buxoro viloyati</li>
            <li className="viloyat">Farg'ona viloyati</li>
            <li className="viloyat">Qo'qon</li>
            <li className="viloyat">Andijon viloyati</li>
            <li className="viloyat">Namangan viloyati</li>
            <li className="viloyat">Qashqadaryo viloyati</li>
            <li className="viloyat">Surxondaryo viloyati</li>
            <li className="viloyat">Xorazm viloyati</li>
            <li className="viloyat">Qoraqalpog'iston Respublikasi</li>
        </ul>
    </ModalBody>
    </ModalContent>
    </Modal>
    <div className="toshkent" onClick={onOpen}>
        <img src={Map} alt="" />
        <h5 className="map__text">Toshkent va Toshkent viloyati</h5>
    </div>
    </div>
)
}

export default NavbarMedium