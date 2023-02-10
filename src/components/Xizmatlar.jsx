import React from 'react'
import Tv from '../assets/images/TV.jpg'
import App from '../assets/images/App.jpg'
import BeelMus from '../assets/images/BeelineMusic.jpg'
import Perezagruzka from '../assets/images/perezagruzka.jpg'

const Xizmatlar = () => {
    return (
        <div style={{paddingTop: '50px'}}>
            <h1 className="ommabop__title">Ommabop xizmatlar</h1>
            <ul className="xizmatlar__items">
            <li className="xizmatlar__item">
                <img src={Tv} alt=""  style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
                <div className="xizmatlar__box">
                    <h1 className="xizmatlar__title">Beeline TV</h1>
                    <p className="xizmatlar__text">Internetingizni sarflamay sevimli filmlar va seriallarni tomosha qiling!</p>
                    <div className="apkni__yuklash">
                        <div style={{textAlign: 'center'}}>
                        <button className="yuklash">APKNI YUKLASH</button>
                        </div>
                        <a href="#">Batafsil</a>
                    </div>
                </div>
            </li>
            <li className="xizmatlar__item">
                <img src={App} alt=""  style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
                <div className="xizmatlar__box">
                    <h1 className="xizmatlar__title">Beeline App</h1>
                    <p className="xizmatlar__text">Reklamasiz va trafikni sarflamagan holda eng zo'r o'yinlar va mobil ilovalarni yuklab oling!</p>
                    <div className="apkni__yuklash">
                        <div style={{textAlign: 'center'}}>
                        <button className="yuklash">APKNI YUKLASH</button>
                        </div>
                        <a href="#">Batafsil</a>
                    </div>
                </div>
            </li>
            <li className="xizmatlar__item">
                <img src={BeelMus} alt=""  style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
                <div className="xizmatlar__box">
                    <h1 className="xizmatlar__title">Beeline Music & Radio</h1>
                    <p className="xizmatlar__text">Internet trafikni sarflamagan holda sevimli musiqangizni tinglashdan bahramand bo'ling!</p>
                    <div className="apkni__yuklash">
                        <div style={{textAlign: 'center'}}>
                        <button className="yuklash">APKNI YUKLASH</button>
                        </div>
                        <a href="#">Batafsil</a>
                    </div>
                </div>
            </li>
            <li className="xizmatlar__item">
                <img src={Perezagruzka} alt=""  style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
                <div className="xizmatlar__box">
                    <h1 className="xizmatlar__title">Perezagruzka</h1>
                    <p className="xizmatlar__text">Internetingizni sarflamay sevimli filmlar va seriallarni tomosha qiling!Agarda Sizda tarif rejangiz bo'yicha taqdim etilgan trafik yakunlansa, unda Siz ushbu xizmatdan foydalanib, tarif rejani qayta ishga tushirib, daqiqa, SMS va MB paketlarini to'liq hajmda olishingiz mumkin.</p>
                    <div className="apkni__yuklash">
                        <a href="#">Batafsil</a>
                    </div>
                </div>
            </li>
            </ul>
            <div style={{textAlign: 'center'}}>
                <button className='ommabop__button'>Barcha tariflar</button>
            </div>
        </div>
    )
}

export default Xizmatlar