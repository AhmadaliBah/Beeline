import React from 'react'
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
import { Link } from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../styles/jismoniy.css'

const Ommabop = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };
    const items = [
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
        </div>,
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
        </div>,
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
        </div>,
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
    ];
return (
    <div>
        <h1 className="ommabop__title">Ommabop tariflar</h1>
        <div className="tariflar__carousel">
        <AliceCarousel mouseTracking autoPlay autoPlayInterval={1500} infinite autoPlayStrategy='all' keyboardNavigation items={items} responsive={responsive}/>
        </div>
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
        <Link className='tariflar__link' to={'/tariflar'}>
            <button className='ommabop__button'>Barcha tariflar</button>
        </Link>
    </div>
)
}

export default Ommabop