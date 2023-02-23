import React from 'react'
import { Link } from 'react-router-dom'
import AksiyalarProps from '../components/AksiyalarProps'

const Aksiyalar = () => {
    return (
        <div>
            <div className="router" style={{width: '150px'}}>
                <Link to={'/'}>
                    <h5 className="router__1">Bosh sahifa</h5>
                </Link>
                    <i class="fa-sharp fa-solid fa-arrow-right-long"></i>
                <h5 className="router__2">Aksiyalar</h5>
            </div>
            <div className="sides">
                <div className="left">
                <h1 className="xizmatlar__title" style={{paddingTop: '30px'}}>Aksiyalar</h1>
                <AksiyalarProps title="“Beeline”dan qimmatbaho sovrinlar o‘yini." text="Mobil o‘yinlar o‘ynab, boshqa ishtirokchilar bilan bellashing, ballar to‘plang va ajoyib sovrinlarni yutib olish imkoniyatini qo‘ldan boy bermang!"/>
                <AksiyalarProps title="Internet yoningizda bo'lsin!"/>
                <AksiyalarProps title="«Hammasi ZO'R» va «STATUS» yangi tariflar turkumi uchun tungi bonus aksiyasi" text="Beeline Yangi Yil sovg‘larini ulashishda davom etadi!"/>
                <AksiyalarProps title="«Smartphone uchun bonus» aksiyasi" text="Yangi smartfon sotib oling! Beelinega ulaning! 3 oy davomida 5 GB dan bonusga ega bo'ling!"/>
                <AksiyalarProps title="Beeline ning rouming xizmati bilan Muqaddas Haj safari!" text="2023 yil oxirigacha Saudiya Arabistoniga sayohat qiluvchi mijozlar uchun maxsus imtiyozli aksiya mavjud."/>
                <AksiyalarProps title="«Beeline» dan rouming xizmati bilan dengiz bo'yidagi ta'til! Turkiya, Misr, Shri-Lanka, Tailand va Malayziyada qo'ng'iroqlarga 70% gacha chegirmalar!" text="Hech narsa ulashingiz shart emas, balansingizni to'ldiring va aloqadan foydalanishda davom eting."/>
                <AksiyalarProps title="«Juma takliflari» aksiyasi" text="2022y. 4 martidan boshlab har juma sizni maxsus takliflarimiz kutadi!"/>
                <AksiyalarProps title="«Beeline Uzbekistan» mobil ilovasida ro'yxatdan o'ting va bonusga ega bo'ling!" text="«Beeline Uzbekistan» ilovasini birinchi bor o'rnatgan va ro'yxatdan o'tgan har bir foydalanuvchiga 500 MB bonus beriladi!"/>
                <AksiyalarProps title="4G Bonus! Perezagruzka" text="Ko'proq internet istaysizmi? «Beepul», «Beeline TV» va «Beeline Music & Radio» raqamli xizmatlarimizning foydalanuvchisiga aylaning va har oy 3GBgacha trafikka ega bo'ling! Gigabaytlaringizni oling"/>
                <AksiyalarProps title="Qadamlar uchun Giglar" text="Sizdan qadamlar-bizdan gigabaytlar! Beeline bilan birga qadam bosing!"/>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <button className='koproq'>Ko'proq ko'rsatish</button>
                </div>
                </div>
                <div className="right">
                <ul className="ul1">
                    <li>Barcha</li>
                </ul>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <button className='hamkorlar__btn'>AKSIYALAR ARXIVI</button>
            </div>
        </div>
    )
}

export default Aksiyalar