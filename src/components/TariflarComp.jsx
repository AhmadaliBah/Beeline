import React from 'react'
import '../styles/tariflar.css'
import Zor1 from '../assets/images/zor1.jpg'
import Zor2 from '../assets/images/zor2.jpg'
import Zor3 from '../assets/images/zor3.jpg'
import Zor4 from '../assets/images/zor4.jpg'
import Call from '../assets/icons2/call.svg'
import Global from '../assets/icons2/global.svg'
import Night from '../assets/icons2/night.svg'
import Envelope from '../assets/icons2/envelope.svg'
import Tv from '../assets/icons2/tv.svg'
import Besconechniy from '../assets/icons2/beskonechniy.svg'
import Music from '../assets/icons2/music.svg'
import Devices from '../assets/icons2/devices.svg'
import Simcard from '../assets/icons2/simcard.svg'
import Discount from '../assets/icons2/discount.svg'
import Silver from '../assets/images/silver.jpg'
import Gold from '../assets/images/gold.jpg'
import Platinum from '../assets/images/platinum.jpg'
import Banner from '../assets/images/banner.jpg'
import Oson1 from '../assets/images/oson1.png'
import Oson2 from '../assets/images/oson2.png'
import InternetBox from '../assets/icons2/internetbox.png'
import Sport from '../assets/images/sportt.png'
import Kunlik from '../assets/images/kunlik.png'
import Bolajon from '../assets/images/bolajon.png'
import Welcome from '../assets/images/welcome.png'
import Senanta from '../assets/images/senanta.png'
import Money from '../assets/icons2/money.svg'

const TariflarComp = () => {
    return (
        <div>
            <div className="router">
                <h5 className="router__1">Bosh sahifa</h5>
                <i class="fa-sharp fa-solid fa-arrow-right-long"></i>
                <h5 className="router__2">Tariflar</h5>
            </div>
            <div className="tariflar">
                <h1 className="tariflar__title">Tariflar</h1>
                <ul className="tariflar__items">
                    <li className="item1">BARCHA</li>
                    <li className="tariflar__item">SPORT</li>
                    <li className="tariflar__item">ROUMING</li>
                    <li className="tariflar__item">QO'NG'IROQLAR</li>
                    <li className="tariflar__item">BARCHASI BIR TARIFDA</li>
                </ul>
                <img className='tariflar__img' src={Banner} alt="" />
            </div>
            <div className="hammasi__zor">
                <h1 className="tariflar__title hammasi__title">HAMMASI ZO'R</h1>
                <div className="ommabop__items">
            <div className="ommabop__item">
                <img src={Zor1} alt=""  style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
                <ul className="ommabop__devices">
                    <li className="ommabop__icon">
                        <img src={Call} alt="" />
                        <div>
                            <h3 className="icon__title"><span>1500</span> daqiqa O'zbekiston bo'yicha</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Global} alt="" />
                        <div>
                            <h3 className="icon__title"><span>3</span> Gb barcha yo'nalishlarga</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Night} alt="" />
                        <div>
                            <h3 className="icon__title"><span>9</span> Gb, tungi bonus (01:00 - 08:00)</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Envelope} alt="" />
                        <div>
                            <h3 className="icon__title"><span>500</span> SMS O'zbekiston bo'yicha</h3>
                        </div>
                    </li>
                </ul>
                <div className="price__box">
                    <h1 className="ommabop__price">20 000 <span>s'om / oy</span></h1>
                    <a href="#">Batafsil</a>
                </div>
            </div>
            <div className="ommabop__item">
                <img src={Zor2} alt=""  style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
                <ul className="ommabop__devices">
                    <li className="ommabop__icon">
                        <img src={Call} alt="" />
                        <div>
                            <h3 className="icon__title"><span>2500</span> daqiqa O'zbekiston bo'yicha</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Global} alt="" />
                        <div>
                            <h3 className="icon__title"><span>5</span> Gb barcha yo'nalishlarga</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Night} alt="" />
                        <div>
                            <h3 className="icon__title"><span>15</span> Gb, tungi bonus (01:00 - 08:00)</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Envelope} alt="" />
                        <div>
                            <h3 className="icon__title"><span>500</span> SMS O'zbekiston bo'yicha</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Tv} alt="" />
                        <div>
                            <h3 className="icon__title">Beeline TV: Teleqanallar</h3>
                        </div>
                    </li>
                </ul>
                <div className="price__box">
                    <h1 className="ommabop__price">30 000 <span>s'om / oy</span></h1>
                    <a href="#">Batafsil</a>
                </div>
            </div>
            <div className="ommabop__item">
                <img src={Zor3} alt=""  style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
                <ul className="ommabop__devices">
                    <li className="ommabop__icon">
                        <img src={Besconechniy} alt="" />
                        <div>
                            <h3 className="icon__title">O'zbekiston bo'ylab cheksiz qo'ng'iroqlar</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Global} alt="" />
                        <div>
                            <h3 className="icon__title"><span>8</span> Gb barcha yo'nalishlarga</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Night} alt="" />
                        <div>
                            <h3 className="icon__title"><span>24</span> Gb, tungi bonus (01:00 - 08:00)</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Envelope} alt="" />
                        <div>
                            <h3 className="icon__title"><span>1000</span> SMS O'zbekiston bo'yicha</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Tv} alt="" />
                        <div>
                            <h3 className="icon__title">Beeline TV: Teleqanallar va Amediateka</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Music} alt="" />
                        <div>
                            <h3 className="icon__title">Beeline Music</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Devices} alt="" />
                        <div>
                            <h3 className="icon__title"><span>500000</span> so'mgacha 0% pul o'tkazmalar Beepul ilovasi orqali</h3>
                        </div>
                    </li>
                </ul>
                <div className="price__box">
                    <h1 className="ommabop__price">40 000 <span>s'om / oy</span></h1>
                    <a href="#">Batafsil</a>
                </div>
            </div>
            <div className="ommabop__item">
                <img src={Zor4} alt=""  style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
                <ul className="ommabop__devices">
                    <li className="ommabop__icon">
                        <img src={Besconechniy} alt="" />
                        <div>
                            <h3 className="icon__title">O'zbekiston bo'ylab cheksiz qo'ng'iroqlar</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Global} alt="" />
                        <div>
                            <h3 className="icon__title"><span>15</span> Gb barcha yo'nalishlarga</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Night} alt="" />
                        <div>
                            <h3 className="icon__title"><span>45</span> Gb, tungi bonus (01:00 - 08:00)</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Envelope} alt="" />
                        <div>
                            <h3 className="icon__title"><span>1000</span> SMS O'zbekiston bo'yicha</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Tv} alt="" />
                        <div>
                            <h3 className="icon__title">Beeline TV: Teleqanallar va Amediateka</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Music} alt="" />
                        <div>
                            <h3 className="icon__title">Beeline Music</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Devices} alt="" />
                        <div>
                            <h3 className="icon__title"><span>800000</span> so'mgacha 0% pul o'tkazmalar Beepul ilovasi orqali</h3>
                        </div>
                    </li>
                </ul>
                <div className="price__box">
                    <h1 className="ommabop__price">60 000 <span>s'om / oy</span></h1>
                    <a href="#">Batafsil</a>
                </div>
            </div>
        </div>
            </div>
            <div className="hammasi__zor">
                <h1 className="tariflar__title hammasi__title">Status</h1>
                <div className="ommabop__items">
            <div className="ommabop__item status1">
                <img src={Silver} alt=""  style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
                <ul className="ommabop__devices">
                    <li className="ommabop__icon">
                        <img src={Besconechniy} alt="" />
                        <div>
                            <h3 className="icon__title">O'zbekiston bo'ylab cheksiz qo'ng'iroqlar</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Global} alt="" />
                        <div>
                            <h3 className="icon__title"><span>30</span> Gb barcha yo'nalishlarga</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Night} alt="" />
                        <div>
                            <h3 className="icon__title"><span>90</span> Gb, tungi bonus (01:00 - 08:00)</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Envelope} alt="" />
                        <div>
                            <h3 className="icon__title"><span>2000</span> SMS O'zbekiston bo'yicha</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Tv} alt="" />
                        <div>
                            <h3 className="icon__title">Beeline TV: Telekanallar va Amediateka</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Music} alt="" />
                        <div>
                            <h3 className="icon__title">Beeline Music</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Devices} alt="" />
                        <div>
                            <h3 className="icon__title"><span>1 200 000</span> so'mgacha 0% pul o'tkazmalar Beepul ilovasi orqali</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Global} alt="" />
                        <div>
                            <h3 className="icon__title"><span>100</span> MB roumingda VEON hududi uchun</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Simcard} alt="" />
                        <div>
                            <h3 className="icon__title"><span>250 000</span> so'm nominaldagi «Oltin» raqam</h3>
                        </div>
                    </li>
                </ul>
                <div className="price__box">
                    <h1 className="ommabop__price">95 000 <span>s'om / oy</span></h1>
                    <a href="#">Batafsil</a>
                </div>
            </div>
            <div className="ommabop__item status1">
                <img src={Gold} alt=""  style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
                <ul className="ommabop__devices">
                    <li className="ommabop__icon">
                        <img src={Besconechniy} alt="" />
                        <div>
                            <h3 className="icon__title">O'zbekiston bo'ylab cheksiz qo'ng'iroqlar</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Global} alt="" />
                        <div>
                            <h3 className="icon__title"><span>50</span> Gb barcha yo'nalishlarga</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Night} alt="" />
                        <div>
                            <h3 className="icon__title"><span>150</span> Gb, tungi bonus (01:00 - 08:00)</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Envelope} alt="" />
                        <div>
                            <h3 className="icon__title"><span>2000</span> SMS O'zbekiston bo'yicha</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Tv} alt="" />
                        <div>
                            <h3 className="icon__title">Beeline TV: Telekanallar va Amediateka</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Music} alt="" />
                        <div>
                            <h3 className="icon__title">Beeline Music</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Devices} alt="" />
                        <div>
                            <h3 className="icon__title"><span>1 500 000</span> so'mgacha 0% pul o'tkazmalar Beepul ilovasi orqali</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Call} alt="" />
                        <div>
                            <h3 className="icon__title"><span>50</span> daqiqa VEON hududida roumingda kirish/chiqish qo'ng'iroqlari uchun</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Global} alt="" />
                        <div>
                            <h3 className="icon__title"><span>250</span> MB roumingda VEON hududi uchun</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Discount} alt="" />
                        <div>
                            <h3 className="icon__title"><span>50</span> % chegirma roumingda VEON hududida kiruvchi qo’ng’iroqlarga </h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Simcard} alt="" />
                        <div>
                            <h3 className="icon__title"><span>500 000</span> so'm nominaldagi «Oltin» raqam</h3>
                        </div>
                    </li>
                </ul>
                <div className="price__box">
                    <h1 className="ommabop__price">135 000 <span>s'om / oy</span></h1>
                    <a href="#">Batafsil</a>
                </div>
            </div>
            <div className="ommabop__item status1">
                <img src={Platinum} alt=""  style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
                <ul className="ommabop__devices">
                    <li className="ommabop__icon">
                        <img src={Besconechniy} alt="" />
                        <div>
                            <h3 className="icon__title">O'zbekiston bo'ylab cheksiz qo'ng'iroqlar</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Global} alt="" />
                        <div>
                            <h3 className="icon__title"><span>150</span> Gb barcha yo'nalishlarga</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Night} alt="" />
                        <div>
                            <h3 className="icon__title"><span>450</span> Gb, tungi bonus (01:00 - 08:00)</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Envelope} alt="" />
                        <div>
                            <h3 className="icon__title"><span>2000</span> SMS O'zbekiston bo'yicha</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Tv} alt="" />
                        <div>
                            <h3 className="icon__title">Beeline TV: Telekanallar va Amediateka</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Music} alt="" />
                        <div>
                            <h3 className="icon__title">Beeline Music</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Devices} alt="" />
                        <div>
                            <h3 className="icon__title"><span>2 000 000</span> so'mgacha 0% pul o'tkazmalar Beepul ilovasi orqali</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Call} alt="" />
                        <div>
                            <h3 className="icon__title"><span>100</span> daqiqa VEON hududida roumingda kirish/chiqish qo'ng'iroqlari uchun</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Global} alt="" />
                        <div>
                            <h3 className="icon__title"><span>500</span> MB roumingda VEON hududi uchun</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Call} alt="" />
                        <div>
                            <h3 className="icon__title"><span>100</span> daqiqa barcha xalqaro qo'ng'iroqlar uchun </h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Simcard} alt="" />
                        <div>
                            <h3 className="icon__title"><span>1 500 000</span> so'm nominaldagi «Oltin» raqam</h3>
                        </div>
                    </li>
                </ul>
                <div className="price__box">
                    <h1 className="ommabop__price">200 000 <span>s'om / oy</span></h1>
                    <a href="#">Batafsil</a>
                </div>
            </div>
                </div>
            </div>
            <div className="hammasi__zor">
                <h1 className="tariflar__title hammasi__title">Oson</h1>
                <div className="ommabop__items">
            <div className="ommabop__item oson">
                <img src={Oson1} alt=""  style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
                <ul className="ommabop__devices">
                <li className="ommabop__icon">
                        <img src={Besconechniy} alt="" />
                        <div>
                            <h3 className="icon__title">O'zbekiston bo'ylab cheksiz qo'ng'iroqlar *</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img style={{width: '30px', height: '30px'}} src={InternetBox} alt="" />
                        <div>
                            <h3 className="icon__title"><span>1000 MB barcha yo'nalishlarga</span></h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src="https://beeline.uz/binaries/content/assets/js/nd/img/icons/params/envelope.svg" alt="" />
                        <div>
                            <h3 className="icon__title"><span>5000 SMS O'zbekiston bo'yicha</span></h3>
                        </div>
                    </li>
                </ul>
                <div className="price__box">
                    <h1 className="ommabop__price">45 000 <span>s'om / oy</span></h1>
                    <a href="#">Batafsil</a>
                </div>
            </div>
            <div className="ommabop__item oson">
                <img src={Oson2} alt=""  style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
                <ul className="ommabop__devices">
                    <li className="ommabop__icon">
                        <img src={Call} alt="" />
                        <div>
                            <h3 className="icon__title"><span>500</span> daqiqa O'zbekiston bo'yicha</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Envelope} alt="" />
                        <div>
                            <h3 className="icon__title"><span>500</span> SMS O'zbekiston bo'yicha</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Global} alt="" />
                        <div>
                            <h3 className="icon__title"><span>10</span> MB</h3>
                        </div>
                    </li>
                </ul>
                <div className="price__box">
                    <h1 className="ommabop__price">14 000 <span>s'om / oy</span></h1>
                    <a href="#">Batafsil</a>
                </div>
            </div>
                </div>
            </div>
            <div className="hammasi__zor">

                <h1 className="tariflar__title hammasi__title">Boshqalar</h1>
                <div className="ommabop__items">
            <div className="ommabop__item boshqalar">
                <img src={Sport} alt=""  style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
                <ul className="ommabop__devices">
                    <li className="ommabop__icon">
                        <img src={Besconechniy} alt="" />
                        <div>
                            <h3 className="icon__title">daqiqa O'zbekiston bo'yicha</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Global} alt="" />
                        <div>
                            <h3 className="icon__title"><span>10</span> Gb barcha yo'nalishlarga</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Envelope} alt="" />
                        <div>
                            <h3 className="icon__title"><span>1000</span> SMS O'zbekiston bo'yicha</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img width={"30px"} height={'30px'} src={Senanta} alt="" />
                        <div>
                            <h3 className="icon__title">Beeline TV: Setanta sports</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Tv} alt="" />
                        <div>
                            <h3 className="icon__title">Beeline TV: Telekanallar</h3>
                        </div>
                    </li>
                </ul>
                <div className="price__box">
                    <h1 className="ommabop__price">50 000 <span>s'om / oy</span></h1>
                    <a href="#">Batafsil</a>
                </div>
            </div>
            <div className="ommabop__item boshqalar">
                <img src={Kunlik} alt=""  style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
                <ul className="ommabop__devices">
                    <li className="ommabop__icon">
                        <img src={Call} alt="" />
                        <div>
                            <h3 className="icon__title"><span>100</span> daqiqa kuniga O'zbekiston boylab*</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Global} alt="" />
                        <div>
                            <h3 className="icon__title"><span>100</span> MB kuniga barcha yo’nalishlarga</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Money} alt="" />
                        <div>
                            <h3 className="icon__title"><span>10</span> % cashback</h3>
                        </div>
                    </li>
                </ul>
                <div className="price__box">
                    <h1 className="ommabop__price">900 <span>s'om / kun</span></h1>
                    <a href="#">Batafsil</a>
                </div>
            </div>
            <div className="ommabop__item boshqalar">
                <img src={Bolajon} alt=""  style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
                <ul className="ommabop__devices">
                    <li className="ommabop__icon">
                        <img src={Call} alt="" />
                        <div>
                            <h3 className="icon__title"><span>500</span> daqiqa tarmoq ichida chiqish qo'ng'iroqlari uchun</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Global} alt="" />
                        <div>
                            <h3 className="icon__title"><span>1 500</span> MB tarif bo'yicha kiritilgan to'plam</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Call} alt="" />
                        <div>
                            <h3 className="icon__title"><span>125</span> so'm boshqa tarmoqlarga chiqish qo'ng'iroqlari daqiqasiga</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Envelope} alt="" />
                        <div>
                            <h3 className="icon__title"><span>85</span> so'm O‘zbekiston bo‘yicha chiquvchi SMS</h3>
                        </div>
                    </li>
                </ul>
                <div className="price__box">
                    <h1 className="ommabop__price">11 500 <span>s'om / oy</span></h1>
                    <a href="#">Batafsil</a>
                </div>
            </div>
            <div className="ommabop__item boshqalar">
                <img src={Welcome} alt=""  style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
                <ul className="ommabop__devices">
                    <li className="ommabop__icon">
                        <img src={Call} alt="" />
                        <div>
                            <h3 className="icon__title"><span>1000</span> daqiqa O'zbekiston bo'yicha</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Global} alt="" />
                        <div>
                            <h3 className="icon__title"><span>10 000</span> MB barcha yo’nalishlarga</h3>
                        </div>
                    </li>
                    <li className="ommabop__icon">
                        <img src={Envelope} alt="" />
                        <div>
                            <h3 className="icon__title"><span>1000</span> SMS O'zbekiston bo'yicha</h3>
                        </div>
                    </li>
                </ul>
                <div className="price__box">
                    <h1 className="ommabop__price">50 000 <span>s'om / oy</span></h1>
                    <a href="#">Batafsil</a>
                </div>
            </div>
                </div>
            </div>
            <div className="tariflar__arxivi">
                <div>
                    <button className="tariflar__btn">TARIFLAR ARXIVI</button>
                </div>
                <div>
                    <button className="tariflar__btn">TARIF VA XIZMATLARNING NARXLARI</button>
                </div>
            </div>
        </div>
    )
}

export default TariflarComp