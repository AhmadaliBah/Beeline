import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
    } from '@chakra-ui/react'

const Accordions = () => {
    return (
        <div className='accordions'>
            <h3 className='accordions__title'>Roumingda tariflar, aksiyalar, chegirmalar va xizmatlar</h3>
            <Accordion allowMultiple>
                <AccordionItem>
                    <h2>
                    <AccordionButton _expanded={{color: 'black', fontWeight: '600' }}>
                        <Box as="span" flex='1' textAlign='left'>
                        Rouming nima va uni qanday yoqish kerak?
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
                <AccordionItem>
                    <h2>
                    <AccordionButton _expanded={{color: 'black', fontWeight: '600' }}>
                        <Box as="span" flex='1' textAlign='left'>
                            Roumingda  qo’ng’iroq va SMSlar uchun standart tariflar
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
                <AccordionItem>
                    <h2>
                    <AccordionButton _expanded={{color: 'black', fontWeight: '600' }}>
                        <Box as="span" flex='1' textAlign='left'>
                        Roumingda  mobil internet uchun standart tariflar
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
                <AccordionItem>
                    <h2>
                    <AccordionButton _expanded={{color: 'black', fontWeight: '600' }}>
                        <Box as="span" flex='1' textAlign='left'>
                        Dunyo bo‘ylab sayohatlar uchun qulay rouming-paketlar
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
                <AccordionItem>
                    <h2>
                    <AccordionButton _expanded={{color: 'black', fontWeight: '600' }}>
                        <Box as="span" flex='1' textAlign='left'>
                        Chet elga sayohatlar vaqtida aksiya va chegirmalar
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
                <AccordionItem>
                    <h2>
                    <AccordionButton _expanded={{color: 'black', fontWeight: '600' }}>
                        <Box as="span" flex='1' textAlign='left'>
                        Samolyot bortida rouming
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
            <h3 className='accordions__title' style={{paddingTop: '40px'}}>Ko’p so’raladigan savollar</h3>
            <Accordion allowMultiple>
                <AccordionItem>
                    <h2>
                    <AccordionButton _expanded={{color: 'black', fontWeight: '600' }}>
                        <Box as="span" flex='1' textAlign='left'>
                        Rouming haqida foydali ma'lumotlarga ega rouming-navigatorni yuklab oling
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
                <AccordionItem>
                    <h2>
                    <AccordionButton _expanded={{color: 'black', fontWeight: '600' }}>
                        <Box as="span" flex='1' textAlign='left'>
                        Roumingdan foydalanish ushun hisobda qancha pul bo’lishi lozim?
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
                <AccordionItem>
                    <h2>
                    <AccordionButton _expanded={{color: 'black', fontWeight: '600' }}>
                        <Box as="span" flex='1' textAlign='left'>
                        Roumingda qanday qilib hisobni to’ldirish mumkin?
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
                <AccordionItem>
                    <h2>
                    <AccordionButton _expanded={{color: 'black', fontWeight: '600' }}>
                        <Box as="span" flex='1' textAlign='left'>
                        Tarmoqda ro’yxatdan o’tmaganda nima qilish kerak?
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
                <AccordionItem>
                    <h2>
                    <AccordionButton _expanded={{color: 'black', fontWeight: '600' }}>
                        <Box as="span" flex='1' textAlign='left'>
                        Internet ishlamaganda nima qilish kerak?
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
                <AccordionItem>
                    <h2>
                    <AccordionButton _expanded={{color: 'black', fontWeight: '600' }}>
                        <Box as="span" flex='1' textAlign='left'>
                        Roumingda muammoga duch kelsangiz, biz bilan qanday bog’lanishingiz mumkin?
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
                <AccordionItem>
                    <h2>
                    <AccordionButton _expanded={{color: 'black', fontWeight: '600' }}>
                        <Box as="span" flex='1' textAlign='left'>
                        Qo’ng’iroq qilish va SMS yuborish uchun raqamni qanday kiritish lozim?
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
                <AccordionItem>
                    <h2>
                    <AccordionButton _expanded={{color: 'black', fontWeight: '600' }}>
                        <Box as="span" flex='1' textAlign='left'>
                        O’zbekistonning chegara hududlarida istiqomat qiluvchilarga
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
        </div>
    )
}

export default Accordions