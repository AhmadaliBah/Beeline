import React from 'react'

const InternetPaketlar = () => {
    return (
        <div style={{paddingTop: '30px'}}>
            <h1 className="ommabop__title title1">Internet-Paketlar</h1>
            <h3 className="subtitle">Tanlang va shu yerning o‘zida ulang</h3>
            <ul className="paketlar__items">
                <li className="paketlar__item">
                    <div className="megabayt">
                        <h3>Internet-paket</h3>
                        <h1>500 MB <span>1 kunga</span></h1>
                        <a className="batafsil">Batafsil</a>
                    </div>
                    <div className="megabayt__price">
                        <h1>5000 <span>so'm</span></h1>
                        <button>Ulanish</button>
                    </div>
                </li>
                <li className="paketlar__item">
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
                        <h1>5 GB <span>7 kunga</span></h1>
                        <a className="batafsil">Batafsil</a>
                    </div>
                    <div className="megabayt__price">
                        <h1>20 000 <span>so'm</span></h1>
                        <button>Ulanish</button>
                    </div>
                </li>
                <li className="paketlar__item">
                    <div className="megabayt">
                        <h3>Internet-paket</h3>
                        <h1>1 GB <span>30 kunga</span></h1>
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
                        <h1>5 GB <span>30 kunga</span></h1>
                        <a className="batafsil">Batafsil</a>
                    </div>
                    <div className="megabayt__price">
                        <h1>25 000 <span>so'm</span></h1>
                        <button>Ulanish</button>
                    </div>
                </li>
            </ul>
            <div style={{textAlign: 'center'}}>
                <button className='ommabop__button'>Barcha internet-paketlar</button>
            </div>
        </div>
    )
}

export default InternetPaketlar