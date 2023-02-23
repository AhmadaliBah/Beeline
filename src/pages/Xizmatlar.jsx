import React from 'react'
import '../styles/xizmatlar.css'
import Tv from '../assets/images/TV.jpg'
import App from '../assets/images/App.jpg'
import BeelMus from '../assets/images/BeelineMusic.jpg'
import Beepul from '../assets/images/beepul.png'
import Visa from '../assets/images/visa.png'
import AliceCarousel from 'react-alice-carousel';
import Katta from '../assets/images/katta.png'
import Football from '../assets/images/football.jpg'
import Pressa from '../assets/images/pressa.jpg'
import Gudok from '../assets/images/gudok.jpg'
import Simli from '../assets/images/simli.png'
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom'

const Xizmatlar = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 4 },
    };
    const digital = [
        <li className="xizmatlar__item">
        <img src={Tv} alt=""  style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
            <div className="xizmatlar__box">
                <h1 className="xizmatlar__title2">Beeline TV</h1>
                <p className="xizmatlar__text">Internetingizni sarflamay sevimli filmlar va seriallarni tomosha qiling!</p>
                <div className="apkni__yuklash">
                    <a href="#">Batafsil</a>
                </div>
            </div>
        </li>,
        <li className="xizmatlar__item">
            <img src={BeelMus} alt=""  style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
            <div className="xizmatlar__box">
                <h1 className="xizmatlar__title2">Beeline Music & Radio</h1>
                <p className="xizmatlar__text">Internet trafikni sarflamagan holda sevimli musiqangizni tinglashdan bahramand bo'ling!</p>
                <div className="apkni__yuklash">
                    <a href="#">Batafsil</a>
                </div>
            </div>
        </li>,
        <li className="xizmatlar__item">
            <img src={Beepul} alt=""  style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
            <div className="xizmatlar__box">
                <h1 className="xizmatlar__title2">Beepul</h1>
                <p className="xizmatlar__text">Beepul orqali mobil hisobingizni to'ldiring va  bonuslarga ega bo’ling.</p>
                <div className="apkni__yuklash">
                    <a href="#">Batafsil</a>
                </div>
            </div>
        </li>,
        <li className="xizmatlar__item">
            <img src={Visa} alt=""  style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
            <div className="xizmatlar__box">
                <h1 className="xizmatlar__title2">Beeline VISA</h1>
                <p className="xizmatlar__text">Beeline VISA - bu internet xaridlar uchun mo'ljallangan karta.</p>
                <div className="apkni__yuklash">
                    <a href="#">Batafsil</a>
                </div>
            </div>
        </li>,
        <li className="xizmatlar__item">
        <img src={Katta} alt=""  style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
            <div className="xizmatlar__box">
                <h1 className="xizmatlar__title2">Katta.uz</h1>
                <p className="xizmatlar__text">Oʻyin orqali ajoyib sovrinlarga ega boʻling! Mobil oʻyinlarni oʻynang, ball/ochko yigʻing, boshqa ishtirokchilar bilan musobaqalashing va ajoyib sovrinlarni yutib olish imkoniga ega boʻling! Sizni 100 dan ortiq qimmatbaho sovgʻalar va tuganmas zavq kutib turibdi!</p>
                <div className="apkni__yuklash">
                    <a href="#">Batafsil</a>
                </div>
            </div>
        </li>,
        <li className="xizmatlar__item">
        <img src={Football} alt=""  style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
            <div className="xizmatlar__box">
                <h1 className="xizmatlar__title2">Fantasy Football</h1>
                <p className="xizmatlar__text">899 so'm/kun yoki 17999 so'm/oy evaziga haqiqiy futbolchilardan tashkil topgan «FANTASTIK JAMOANGIZNI» YARATING.</p>
                <div className="apkni__yuklash">
                    <a href="#">Batafsil</a>
                </div>
            </div>
        </li>,
        <li className="xizmatlar__item">
        <img src={App} alt=""  style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
            <div className="xizmatlar__box">
                <h1 className="xizmatlar__title2">Beeline App</h1>
                <p className="xizmatlar__text">Reklamasiz va internet-trafikni sarflamagan holda eng zo'r o'yinlar va mobil ilovalarni yuklab oling!</p>
                <div className="apkni__yuklash">
                    <a href="#">Batafsil</a>
                </div>
            </div>
        </li>,
        <li className="xizmatlar__item">
        <img src={Pressa} alt=""  style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
            <div className="xizmatlar__box">
                <h1 className="xizmatlar__title2">Beeline Pressa</h1>
                <p className="xizmatlar__text">Internet-trafikni sarflamagan holda sevimli jurnallar va gazetalaringizni onlayn rejimida o'qing!</p>
                <div className="apkni__yuklash">
                    <a href="#">Batafsil</a>
                </div>
            </div>
        </li>,
        <li className="xizmatlar__item">
        <img src={Gudok} alt=""  style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
            <div className="xizmatlar__box">
                <h1 className="xizmatlar__title2">BeeGudok</h1>
                <p className="xizmatlar__text">«BeeGudok» xizmati oddiy zerikarli gudoklarni siz xush ko'rgan musiqa va hazillarga almashtirish imkonini beradi.</p>
                <div className="apkni__yuklash">
                    <a href="#">Batafsil</a>
                </div>
            </div>
        </li>,
    ]
    return (
        <div>
        <div className="router" style={{width: '150px'}}>
                <Link to={'/'}>
                    <h5 className="router__1">Bosh sahifa</h5>
                </Link>
            <i class="fa-sharp fa-solid fa-arrow-right-long"></i>
            <h5 className="router__2">Xizmatlar</h5>
        </div>
        <h1 className="xizmatlar__title" style={{paddingTop: '30px'}}>Xizmatlar</h1>
        <ul className="tariflar__items xizmatlar__items1">
            <li className="item1">Barcha</li>
            <li className="tariflar__item">Digital</li>
            <li className="tariflar__item">Rouming</li>
            <li className="tariflar__item">Internet</li>
            <li className="tariflar__item">Asosiy xizmatlar</li>
            <li className="tariflar__item">Qong'iroqlar</li>
            <li className="tariflar__item">Sms xabarlari</li>
            <li className="tariflar__item">Maxsus takliflarimiz</li>
            <li className="tariflar__item">Simli internet</li>
        </ul>
        <h1 className="xizmatlar__subtitle">Digital</h1>
        <AliceCarousel mouseTracking keyboardNavigation autoPlay autoPlayInterval={500} infinite autoPlayStrategy='all' items={digital} responsive={responsive}/>
        <h1 className="xizmatlar__subtitle">Rouming</h1>
        <AliceCarousel mouseTracking keyboardNavigation autoPlay autoPlayInterval={500} infinite autoPlayStrategy='all' items={digital} responsive={responsive}/>
        <h1 className="xizmatlar__subtitle">Internet</h1>
        <AliceCarousel mouseTracking keyboardNavigation autoPlay autoPlayInterval={500} infinite autoPlayStrategy='all' items={digital} responsive={responsive}/>
        <h1 className="xizmatlar__subtitle">Asosiy xizmatlar</h1>
        <AliceCarousel mouseTracking keyboardNavigation autoPlay autoPlayInterval={500} infinite autoPlayStrategy='all' items={digital} responsive={responsive}/>
        <h1 className="xizmatlar__subtitle">Qo'ng'iroqlar</h1>
        <AliceCarousel mouseTracking keyboardNavigation autoPlay autoPlayInterval={500} infinite autoPlayStrategy='all' items={digital} responsive={responsive}/>
        <h1 className="xizmatlar__subtitle">Sms xabarlari</h1>
        <AliceCarousel mouseTracking keyboardNavigation autoPlay autoPlayInterval={500} infinite autoPlayStrategy='all' items={digital} responsive={responsive}/>
        <h1 className="xizmatlar__subtitle">Maxsus takliflarimiz</h1>
        <AliceCarousel mouseTracking keyboardNavigation autoPlay autoPlayInterval={500} infinite autoPlayStrategy='all' items={digital} responsive={responsive}/>
        <h1 className="xizmatlar__subtitle">Simli internet</h1>
        <ul>
        <li className="xizmatlar__item">
        <img src={Simli} alt=""  style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
            <div className="xizmatlar__box">
                <h1 className="xizmatlar__title2">Simli internet</h1>
                <p className="xizmatlar__text">"Buzton" MChJ kompaniyasi ADSL va FTTB texnologiyalari bo'yicha Internet tarmog'iga simli ulanish xizmatini taqdim etadi.</p>
                <div className="apkni__yuklash">
                    <a href="#">Batafsil</a>
                </div>
            </div>
        </li>
        </ul>
        <div className="tariflar__arxivi">
                <div>
                    <button className="tariflar__btn">XIZMATLAR ARXIVI</button>
                </div>
                <div>
                    <button className="tariflar__btn">TARIF VA XIZMATLARNING NARXLARI</button>
                </div>
            </div>
        </div>
    )
}

export default Xizmatlar