import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import '../styles/yordam.css'
import Search from '../assets/icons/search.svg' 
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
    } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Yordam = () => {
    return (
        <div>
            <div className="router" style={{width: '150px'}}>
                <Link to={'/'}>
                    <h5 className="router__1">Bosh sahifa</h5>
                </Link>
                    <i class="fa-sharp fa-solid fa-arrow-right-long"></i>
                <h5 className="router__2">Yordam</h5>
            </div>
            <h1 className="xizmatlar__title" style={{paddingTop: '30px'}}>Ma'lumot</h1>
            <Tabs variant='unstyled' pt="20px">
                <div style={{display: 'flex'}}>
                <TabList flexDirection="column" background="white" borderRadius="10px" boxShadow="0 2px 4px rgb(0 0 0 / 12%)">
                    <Tab justifyContent="start" width="410px" padding="12px 20px" className='tab' _selected={{ bg: '#FEE900' }}>
                        <img className='tab__img' src="https://beeline.uz/binaries/content/gallery/mainsite/icons/group.svg" alt="" />
                        Xizmatlarga ulanish usullari
                        <span className="counter">1</span>
                    </Tab>
                    <Tab background="#f0f1f3" justifyContent="start" width="410px" padding="12px 20px" className='tab' _selected={{ bg: '#FEE900' }}>
                        <img className='tab__img' src="https://beeline.uz/binaries/content/gallery/mainsite/icons/popolnenie-balansa.svg" alt="" />
                        Hisobni quyidagi usullarda to'ldirilish mumkin:
                        <span className="counter">3</span>
                    </Tab>
                    <Tab justifyContent="start" width="410px" padding="12px 20px" className='tab' _selected={{ bg: '#FEE900' }}>
                        <img src="https://beeline.uz/binaries/content/gallery/mainsite/icons/info.svg" alt="" className="tab__img" />
                        Nol balans
                        <span className="counter">4</span>
                    </Tab>
                    <Tab background="#f0f1f3" justifyContent="start" width="410px" padding="12px 20px" className='tab' _selected={{ bg: '#FEE900' }}>
                        <img src="https://beeline.uz/binaries/content/gallery/mainsite/icons/detalization.svg" alt="" className="tab__img" />
                        Balansdan pul nimaga ishlatilgan?
                        <span className="counter">4</span>
                    </Tab>
                    <Tab justifyContent="start" width="410px" padding="12px 20px" className='tab' _selected={{ bg: '#FEE900' }}>
                        <img src="https://beeline.uz/binaries/content/gallery/mainsite/icons/support.svg" alt="" className="tab__img" />
                        Foydali buyruqlar
                        <span className="counter">1</span>
                    </Tab>
                    <Tab background="#f0f1f3" justifyContent="start" width="410px" padding="12px 20px" className='tab' _selected={{ bg: '#FEE900' }}>
                        <img src="https://beeline.uz/binaries/content/gallery/mainsite/icons/tariffs.svg" alt="" className="tab__img" />
                        Tarif rejasi
                        <span className="counter">4</span>
                    </Tab>
                    <Tab justifyContent="start" width="410px" padding="12px 20px" className='tab' _selected={{ bg: '#FEE900' }}>
                        <img src="https://beeline.uz/binaries/content/gallery/mainsite/icons/tariffs-and-services.svg" alt="" className="tab__img" />
                        Xizmatlarni boshqarish
                        <span className="counter">2</span>
                    </Tab>
                    <Tab background="#f0f1f3" justifyContent="start" width="410px" padding="12px 20px" className='tab' _selected={{ bg: '#FEE900' }}>
                        <img src="https://beeline.uz/binaries/content/gallery/mainsite/icons/roaming.svg" alt="" className="tab__img" />
                        Rouming va xalqaro aloqa
                        <span className="counter">12</span>
                    </Tab>
                    <Tab justifyContent="start" width="410px" padding="12px 20px" className='tab' _selected={{ bg: '#FEE900' }}>
                        <img src="https://beeline.uz/binaries/content/gallery/mainsite/icons/phone.svg" alt="" className="tab__img" />
                        SIM karta va raqam
                        <span className="counter">6</span>
                    </Tab>
                    <Tab background="#f0f1f3" justifyContent="start" width="410px" padding="12px 20px" className='tab' _selected={{ bg: '#FEE900' }}>
                        <img src="https://beeline.uz/binaries/content/gallery/mainsite/icons/detalization.svg" alt="" className="tab__img" />
                        Qo’ng’iroqlar detalizatsiyasi
                        <span className="counter">4</span>
                    </Tab>
                    <Tab justifyContent="start" width="410px" padding="12px 20px" className='tab' _selected={{ bg: '#FEE900' }}>
                        <img src="https://beeline.uz/binaries/content/gallery/mainsite/icons/internet/internet-traffic-standart.svg" alt="" className="tab__img" />
                        Mobil Internet
                        <span className="counter">3</span>
                    </Tab>
                    <Tab background="#f0f1f3" justifyContent="start" width="410px" padding="12px 20px" className='tab' _selected={{ bg: '#FEE900' }}>
                        <img src="https://beeline.uz/binaries/content/gallery/mainsite/icons/letter.svg" alt="" className="tab__img" />
                        Hujjatlar
                        <span className="counter">3</span>
                    </Tab>
                    <Tab justifyContent="start" width="410px" padding="12px 20px" className='tab' _selected={{ bg: '#FEE900' }}>
                        <img src="https://beeline.uz/binaries/content/gallery/mainsite/icons/map.svg" alt="" className="tab__img" />
                        Qamrov hududi xaritasi
                        <span className="counter">1</span>
                    </Tab>
                    <Tab background="#f0f1f3" justifyContent="start" width="410px" padding="12px 20px" className='tab' _selected={{ bg: '#FEE900' }}>
                        <img src="https://beeline.uz/binaries/content/gallery/mainsite/icons/tariffs-and-services.svg" alt="" className="tab__img" />
                        Ogoh bo'ling!
                        <span className="counter">1</span>
                    </Tab>
                    <Tab justifyContent="start" width="410px" padding="12px 20px" className='tab' _selected={{ bg: '#FEE900' }}>
                        <img src="https://beeline.uz/binaries/content/gallery/mainsite/icons/tariffs-and-services.svg" alt="" className="tab__img" />
                        Layfhaklar
                        <span className="counter">3</span>
                    </Tab>
                </TabList>
                <TabPanels marginLeft="20px">
                    <TabPanel>
                    <div className="input__box">
                        <input placeholder="Nom bo'yicha qidirish" className='tabs__input' type="text" />
                        <img className='tabs__input-icon' src={Search} alt="" />
                    </div>
                    <Accordion allowMultiple>
                        <AccordionItem p="20px" background="white" borderRadius="10px">
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                Xizmatlarga ulanish usullari
                                </Box>
                                <AccordionIcon />
                                </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                    </Accordion>
                    </TabPanel>
                    <TabPanel>
                    <div className="input__box">
                        <input placeholder="Nom bo'yicha qidirish" className='tabs__input' type="text" />
                        <img className='tabs__input-icon' src={Search} alt="" />
                    </div>
                    <Accordion allowMultiple>
                        <AccordionItem p="20px" background="white" borderRadius="10px" marginBottom="20px">
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                Xizmatlarga ulanish usullari
                                </Box>
                                <AccordionIcon />
                                </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem p="20px" background="white" borderRadius="10px" marginBottom="20px">
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                Xizmatlarga ulanish usullari
                                </Box>
                                <AccordionIcon />
                                </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem p="20px" background="white" borderRadius="10px" marginBottom="20px">
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                Xizmatlarga ulanish usullari
                                </Box>
                                <AccordionIcon />
                                </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                    </Accordion>
                    </TabPanel>
                    <TabPanel>
                    <div className="input__box">
                        <input placeholder="Nom bo'yicha qidirish" className='tabs__input' type="text" />
                        <img className='tabs__input-icon' src={Search} alt="" />
                    </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="input__box">
                        <input placeholder="Nom bo'yicha qidirish" className='tabs__input' type="text" />
                        <img className='tabs__input-icon' src={Search} alt="" />
                    </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="input__box">
                        <input placeholder="Nom bo'yicha qidirish" className='tabs__input' type="text" />
                        <img className='tabs__input-icon' src={Search} alt="" />
                    </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="input__box">
                        <input placeholder="Nom bo'yicha qidirish" className='tabs__input' type="text" />
                        <img className='tabs__input-icon' src={Search} alt="" />
                    </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="input__box">
                        <input placeholder="Nom bo'yicha qidirish" className='tabs__input' type="text" />
                        <img className='tabs__input-icon' src={Search} alt="" />
                    </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="input__box">
                        <input placeholder="Nom bo'yicha qidirish" className='tabs__input' type="text" />
                        <img className='tabs__input-icon' src={Search} alt="" />
                    </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="input__box">
                        <input placeholder="Nom bo'yicha qidirish" className='tabs__input' type="text" />
                        <img className='tabs__input-icon' src={Search} alt="" />
                    </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="input__box">
                        <input placeholder="Nom bo'yicha qidirish" className='tabs__input' type="text" />
                        <img className='tabs__input-icon' src={Search} alt="" />
                    </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="input__box">
                        <input placeholder="Nom bo'yicha qidirish" className='tabs__input' type="text" />
                        <img className='tabs__input-icon' src={Search} alt="" />
                    </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="input__box">
                        <input placeholder="Nom bo'yicha qidirish" className='tabs__input' type="text" />
                        <img className='tabs__input-icon' src={Search} alt="" />
                    </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="input__box">
                        <input placeholder="Nom bo'yicha qidirish" className='tabs__input' type="text" />
                        <img className='tabs__input-icon' src={Search} alt="" />
                    </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="input__box">
                        <input placeholder="Nom bo'yicha qidirish" className='tabs__input' type="text" />
                        <img className='tabs__input-icon' src={Search} alt="" />
                    </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="input__box">
                        <input placeholder="Nom bo'yicha qidirish" className='tabs__input' type="text" />
                        <img className='tabs__input-icon' src={Search} alt="" />
                    </div>
                    </TabPanel>
                </TabPanels>
                </div>
            </Tabs>
        </div>
    )
}

export default Yordam