import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../styles/tariflar.css'
import { NavLink } from 'react-router-dom';
const Paketlar = () => {

    const handleDragStart = (e) => e.preventDefault();
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const items = [
        <li className="paketlar__item paketlar1" onDragStart={handleDragStart} role="presentation" >
        <div className="megabayt">
            <h3>Internet-paket</h3>
            <h1>100 MB <span>1 kunga</span></h1>
            <a className="batafsil">Batafsil</a>
        </div>
        <div className="megabayt__price">
            <h1>2000 <span>so'm</span></h1>
            <button>Ulanish</button>
        </div>
        </li>,
        <li className="paketlar__item paketlar1" onDragStart={handleDragStart} role="presentation" >
        <div className="megabayt">
            <h3>Internet-paket</h3>
            <h1>200 MB <span>1 kunga</span></h1>
            <a className="batafsil">Batafsil</a>
        </div>
        <div className="megabayt__price">
            <h1>3000 <span>so'm</span></h1>
            <button>Ulanish</button>
        </div>
        </li>,
        <li className="paketlar__item paketlar1" onDragStart={handleDragStart} role="presentation" >
        <div className="megabayt">
            <h3>Internet-paket</h3>
            <h1>500 MB <span>1 kunga</span></h1>
            <a className="batafsil">Batafsil</a>
        </div>
        <div className="megabayt__price">
            <h1>5000 <span>so'm</span></h1>
            <button>Ulanish</button>
        </div>
        </li>,
                <li className="paketlar__item paketlar1" onDragStart={handleDragStart} role="presentation" >
                <div className="megabayt">
                    <h3>Internet-paket</h3>
                    <h1>4 GB <span>1 kunga</span></h1>
                    <a className="batafsil">Batafsil</a>
                </div>
                <div className="megabayt__price">
                    <h1>10 000 <span>so'm</span></h1>
                    <button>Ulanish</button>
                </div>
                </li>
        ];

    const items3 = [
        <li className="paketlar__item paketlar1" onDragStart={handleDragStart} role="presentation">
        <div className="megabayt">
            <h3>Internet-paket</h3>
            <h1>1 GB <span>30 kunga</span></h1>
            <a className="batafsil">Batafsil</a>
        </div>
        <div className="megabayt__price">
            <h1>10 000 <span>so'm</span></h1>
            <button>Ulanish</button>
        </div>
    </li>,
    <li className="paketlar__item paketlar1" onDragStart={handleDragStart} role="presentation">
        <div className="megabayt">
            <h3>Internet-paket</h3>
            <h1>2 GB <span>30 kunga</span></h1>
            <a className="batafsil">Batafsil</a>
        </div>
        <div className="megabayt__price">
            <h1>15 000 <span>so'm</span></h1>
            <button>Ulanish</button>
        </div>
    </li>,
    <li className="paketlar__item paketlar1" onDragStart={handleDragStart} role="presentation">
        <div className="megabayt">
            <h3>Internet-paket</h3>
            <h1>5 GB <span>30 kunga</span></h1>
            <a className="batafsil">Batafsil</a>
        </div>
        <div className="megabayt__price">
            <h1>25 000 <span>so'm</span></h1>
            <button>Ulanish</button>
        </div>
    </li>,
        <li className="paketlar__item paketlar1" onDragStart={handleDragStart} role="presentation">
        <div className="megabayt">
            <h3>Internet-paket</h3>
            <h1>10 GB <span>30 kunga</span></h1>
            <a className="batafsil">Batafsil</a>
        </div>
        <div className="megabayt__price">
            <h1>45 000 <span>so'm</span></h1>
            <button>Ulanish</button>
        </div>
    </li>,
        <li className="paketlar__item paketlar1" onDragStart={handleDragStart} role="presentation">
        <div className="megabayt">
            <h3>Internet-paket</h3>
            <h1>20 GB <span>30 kunga</span></h1>
            <a className="batafsil">Batafsil</a>
        </div>
        <div className="megabayt__price">
            <h1>65 000 <span>so'm</span></h1>
            <button>Ulanish</button>
        </div>
    </li>,
        <li className="paketlar__item paketlar1" onDragStart={handleDragStart} role="presentation">
        <div className="megabayt">
            <h3>Internet-paket</h3>
            <h1>30 GB <span>30 kunga</span></h1>
            <a className="batafsil">Batafsil</a>
        </div>
        <div className="megabayt__price">
            <h1>75 000 <span>so'm</span></h1>
            <button>Ulanish</button>
        </div>
    </li>,
        <li className="paketlar__item paketlar1" onDragStart={handleDragStart} role="presentation">
        <div className="megabayt">
            <h3>Internet-paket</h3>
            <h1>50 GB <span>30 kunga</span></h1>
            <a className="batafsil">Batafsil</a>
        </div>
        <div className="megabayt__price">
            <h1>90 000 <span>so'm</span></h1>
            <button>Ulanish</button>
        </div>
    </li>,
        <li className="paketlar__item paketlar1" onDragStart={handleDragStart} role="presentation">
        <div className="megabayt">
            <h3>Internet-paket</h3>
            <h1>75 GB <span>30 kunga</span></h1>
            <a className="batafsil">Batafsil</a>
        </div>
        <div className="megabayt__price">
            <h1>110 000 <span>so'm</span></h1>
            <button>Ulanish</button>
        </div>
    </li>,
        <li className="paketlar__item paketlar1" onDragStart={handleDragStart} role="presentation">
        <div className="megabayt">
            <h3>Internet-paket</h3>
            <h1>150 GB <span>30 kunga</span></h1>
            <a className="batafsil">Batafsil</a>
        </div>
        <div className="megabayt__price">
            <h1>150 000 <span>so'm</span></h1>
            <button>Ulanish</button>
        </div>
    </li>,
    ]

    const items4 = [
        <li className="paketlar__item paketlar1" onDragStart={handleDragStart} role="presentation" >
        <div className="megabayt">
            <h3>Internet-paket</h3>
            <h1>1 GB <span> Tungi onlayn</span></h1>
            <a className="batafsil">Batafsil</a>
        </div>
        <div className="megabayt__price">
            <h1>3000 <span>so'm</span></h1>
            <button>Ulanish</button>
        </div>
        </li>,
        <li className="paketlar__item paketlar1" onDragStart={handleDragStart} role="presentation" >
        <div className="megabayt">
            <h3>Internet-paket</h3>
            <h1>3 GB <span> Tungi onlayn</span></h1>
            <a className="batafsil">Batafsil</a>
        </div>
        <div className="megabayt__price">
            <h1>5000 <span>so'm</span></h1>
            <button>Ulanish</button>
        </div>
        </li>,
        <li className="paketlar__item paketlar1" onDragStart={handleDragStart} role="presentation" >
        <div className="megabayt">
            <h3>Internet-paket</h3>
            <h1>10 GB <span> Tungi onlayn</span></h1>
            <a className="batafsil">Batafsil</a>
        </div>
        <div className="megabayt__price">
            <h1>10 000 <span>so'm</span></h1>
            <button>Ulanish</button>
        </div>
        </li>,
                <li className="paketlar__item paketlar1" onDragStart={handleDragStart} role="presentation" >
                <div className="megabayt">
                    <h3>Internet-paket</h3>
                    <h1>4 GB <span> Tungi onlayn</span></h1>
                    <a className="batafsil">Batafsil</a>
                </div>
                <div className="megabayt__price">
                    <h1>15 000 <span>so'm</span></h1>
                    <button>Ulanish</button>
                </div>
                </li>
        ];

        let activeStyle = {
            background: 'black',
            color: 'white'
        };

return (
    <div>
            <div className="router router1">
                <h5 className="router__1">Bosh sahifa</h5>
                <i class="fa-sharp fa-solid fa-arrow-right-long"></i>
                <h5 className="router__2">Internet paketlar</h5>
            </div>
            <div className="tariflar">
                <h1 className="tariflar__title">Internet paketlar</h1>
                <ul className="tariflar__items">
                    <NavLink to={'/'} style={({ isActive }) => isActive ? activeStyle : undefined} className="tariflar__item">Barcha paketlar</NavLink>
                    <NavLink to={'/'} style={({ isActive }) => isActive ? activeStyle : undefined} className="tariflar__item">Kunlik</NavLink>
                    <NavLink to={'/'} style={({ isActive }) => isActive ? activeStyle : undefined} className="tariflar__item">Haftalik</NavLink>
                    <NavLink to={'/'} style={({ isActive }) => isActive ? activeStyle : undefined} className="tariflar__item">Oylik</NavLink>
                    <NavLink to={'/'} style={({ isActive }) => isActive ? activeStyle : undefined} className="tariflar__item">Tungi</NavLink>
                    <NavLink to={'/'} style={({ isActive }) => isActive ? activeStyle : undefined} className="tariflar__item">4G</NavLink>
                    <NavLink to={'/'} style={({ isActive }) => isActive ? activeStyle : undefined} className="tariflar__item">Simli</NavLink>
                </ul>
            </div>
            <h1 className="tariflar__title hammasi__title">Kunlik internet paketlar</h1>
            <AliceCarousel mouseTracking autoPlay autoPlayInterval={1500} infinite autoPlayStrategy='all' keyboardNavigation items={items} responsive={responsive}/>
            <h1 className="tariflar__title hammasi__title internet__title">Haftalik internet paketlar</h1>
            <ul className="paketlar__items">
                <li className="paketlar__item">
                    <div className="megabayt">
                        <h3>Internet-paket</h3>
                        <h1>1.5 GB <span>7 kunga</span></h1>
                        <a className="batafsil">Batafsil</a>
                    </div>
                    <div className="megabayt__price">
                        <h1>10 000 <span>so'm</span></h1>
                        <button>Ulanish</button>
                    </div>
                </li>
                <li className="paketlar__item">
                    <div className="megabayt">
                        <h3>Internet-paket</h3>
                        <h1>2.5 GB <span>7 kunga</span></h1>
                        <a className="batafsil">Batafsil</a>
                    </div>
                    <div className="megabayt__price">
                        <h1>15 000 <span>so'm</span></h1>
                        <button>Ulanish</button>
                    </div>
                </li>
                <li className="paketlar__item">
                    <div className="megabayt">
                        <h3>Internet-paket</h3>
                        <h1>5 GB <span>7 kunga</span></h1>
                        <a className="batafsil">Batafsil</a>
                    </div>
                    <div className="megabayt__price">
                        <h1>20 000 <span>so'm</span></h1>
                        <button>Ulanish</button>
                    </div>
                </li>
            </ul>
            <h1 className="tariflar__title hammasi__title internet__title">Oylik internet paketlar</h1>
            <AliceCarousel autoPlay autoPlayInterval={1500} infinite autoPlayStrategy='all' mouseTracking keyboardNavigation items={items3} responsive={responsive}/>
            <h1 className="tariflar__title hammasi__title internet__title">Tungi internet paketlar</h1>
            <AliceCarousel autoPlay autoPlayInterval={1500} infinite autoPlayStrategy='all' mouseTracking keyboardNavigation items={items4} responsive={responsive}/>
            <h1 className="tariflar__title hammasi__title internet__title">4G internet paketlar</h1>
                    <ul className="paketlar__items">
                <li className="paketlar__item">
                    <div className="megabayt">
                        <h3>Internet-paket</h3>
                        <h1>5000 MB <span>4G KUN</span></h1>
                        <a className="batafsil">Batafsil</a>
                    </div>
                    <div className="megabayt__price">
                        <h1>10 000 <span>so'm</span></h1>
                        <button>Ulanish</button>
                    </div>
                </li>
                <li className="paketlar__item">
                    <div className="megabayt">
                        <h3>Internet-paket</h3>
                        <h1>15 000 MB <span>4G Hafta</span></h1>
                        <a className="batafsil">Batafsil</a>
                    </div>
                    <div className="megabayt__price">
                        <h1>30 000 <span>so'm</span></h1>
                        <button>Ulanish</button>
                    </div>
                </li>
                <li className="paketlar__item">
                    <div className="megabayt">
                        <h3>Internet-paket</h3>
                        <h1>30 000 MB <span>4G OY</span></h1>
                        <a className="batafsil">Batafsil</a>
                    </div>
                    <div className="megabayt__price">
                        <h1>60 000 <span>so'm</span></h1>
                        <button>Ulanish</button>
                    </div>
                </li>
            </ul>
            <h1 className="tariflar__title hammasi__title internet__title">Simli internet</h1>
                    <ul className="paketlar__items">
                <li className="paketlar__item">
                    <div className="megabayt">
                        <h3>Simli internet</h3>
                        <h1>CHEKSIZ INTERNET</h1>
                        <a className="batafsil">Batafsil</a>
                    </div>
                </li>
            </ul>
            <div className="barcha">
            <button className='barcha__internet'>BARCHA INTERNET-PAKETLAR</button>
            </div>
    </div>
)
}

export default Paketlar