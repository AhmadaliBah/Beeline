import React from 'react'
import '../styles/yangiliklar.css'
import YangiliklarProps from '../components/YangiliklarProps'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'


const Yangiliklar = () => {
    return (
        <div>
            <div className="router" style={{width: '150px'}}>
                <Link to={'/'}>
                    <h5 className="router__1">Bosh sahifa</h5>
                </Link>
                    <i class="fa-sharp fa-solid fa-arrow-right-long"></i>
                <h5 className="router__2">Yangiliklar</h5>
            </div>
            <div className="sides">
            <div className='left'>
            <h1 className="xizmatlar__title" style={{paddingTop: '30px'}}>Yangiliklar</h1>
            <YangiliklarProps title="Ajoyib yangilik – tez orada «Konstruktor» tarif rejasi yangilanadi!" text="Yangi paketlar, bonuslar, tarifga ulanishda qulayliklar va albatta, chegirmalar!"/>
            <YangiliklarProps title="Zilziladan jabr ko'rganlarga yordam" text="2023-yil 6-fevral kuni Turkiyada talofatli zilzilalardan biri yuz berdi. Yuz minglab odamlar og‘ir ahvolda qolishdi."/>
            <YangiliklarProps title="«Juma takliflari» aksiyasi" text="«Juma takliflari» aksiyasi doirasida navbatdagi maxsus takliflarifimizga ulanishga shoshiling."/>
            <YangiliklarProps title="«Muddatli to‘lovga oltin raqam»" text="Hozir «Oltin raqam» ulab, uning narxini 12 oy mobaynida foizlarsiz va ustamalarsiz to‘lang."/>
            <YangiliklarProps title="Toshkent metropolitenining barcha bekatlarida “Beeline” aloqasi yo‘lga qo‘yildi" text="Digital-operator poytaxt metrosida uyali aloqani sinovdan o‘tkazdi."/>
            <YangiliklarProps title="Hurmatli mijozlar!" text="Shuni ma'lum qilamizki, 2023 yil 9 fevraldan boshlab mobil aloqa xizmatlarini taqdim etish bo'yicha Ommaviy ofertaning yangi tahriri tasdiqlandi."/>
            <YangiliklarProps title="«Juma takliflari» aksiyasi" text="«Juma takliflari» aksiyasi doirasida navbatdagi maxsus takliflarifimizga ulanishga shoshiling."/>
            <YangiliklarProps title="Yaqinlaringiz bilan daqiqa va megabaytlarni ulashing!" text="Yaqinlaringizda megabaytlar tugab qoldimi? Ular doim onlayn bo‘lishlari uchun o‘z megabaytlaringizni ular bilan ulashing."/>
            <YangiliklarProps title="Internet-paket foydalanuvchilari diqqatiga!" text="2023-yil 20-fevraldan haftalik va oylik internet-paketlar to‘plami yangilanmoqda."/>
            <YangiliklarProps title="«Sirli qo’ng’iroq» xizmatidan foydalanuvchi abonentlar diqqatiga" text="Hurmatli mijozlar, sizga shuni ma'lum qilamizki, 2023 yil 16-fevraldan boshlab oldindan to’lov tizimining barcha tariflarda «Sirli qo’ng’iroq» xizmati orqali qo’ng’iroqning 1 daqiqasi 500 so'mdan narxlanadi."/>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <button className='koproq'>Ko'proq ko'rsatish</button>
            </div>
            </div>
            <div className="right">
                <ul className="ul1">
                    <li>Mobil aloqa</li>
                    <li>Aloqa sifati</li>
                    <li>Profilaktika ishlari</li>
                    <li>Barcha</li>
                </ul>
                <ul className="ul2">
                <Menu>
                    <MenuButton className='chakra__btn' borderRadius="20px" bg="#000" color="white" colorScheme="black" as={Button} rightIcon={<ChevronDownIcon />}>
                        Yil
                    </MenuButton>
                    <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton className='chakra__btn' borderRadius="20px" bg="#000" color="white" colorScheme="black" as={Button} rightIcon={<ChevronDownIcon />}>
                        Oy
                    </MenuButton>
                    <MenuList>
                    <MenuItem>Yanvar</MenuItem>
                    <MenuItem>Fevral</MenuItem>
                    <MenuItem>Mart</MenuItem>
                    <MenuItem>Aprel</MenuItem>
                    <MenuItem>May</MenuItem>
                    <MenuItem>Iyun</MenuItem>
                    <MenuItem>Iyul</MenuItem>
                    <MenuItem>Avgust</MenuItem>
                    <MenuItem>Sentabr</MenuItem>
                    <MenuItem>Oktabr</MenuItem>
                    <MenuItem>Noyabr</MenuItem>
                    <MenuItem>Dekabr</MenuItem>
                    </MenuList>
                </Menu>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Yangiliklar