import React from 'react'
import '../styles/jismoniy.css'
import Phones from '../assets/images/phones.png'
import AppStore from '../assets/images/appstore.svg'
import PlayMarket from '../assets/images/googleplay.svg'

const MobilIlova = () => {
    return (
        <div className='ilova'>
            <img className='phones' src={Phones} alt="" />
            <div className="ilova__box">
                <h1 className='ilova__title'>“Beeline Uzbekistan” mobil ilovasini yuklab oling</h1>
                <ul className="ilova__items">
                    <li className="ilova__item">
                    <h5 className="ilova__number">1</h5>
                        <h3>Raqamingiz haqida ma'lumotlar</h3>
                    </li>
                    <li className="ilova__item">
                    <h5 className="ilova__number">2</h5>
                    <h3>Tarifni xohlaganingizcha boshqarish imkoniyati</h3>
                    </li>
                    <li className="ilova__item">
                    <h5 className="ilova__number">3</h5>
                    <h3>Mavjud xarajatlar bo'yicha qulay tafsilotlar</h3>
                    </li>
                </ul>
                <div className="buy">
                    <img src={AppStore} alt="" />
                    <img src={PlayMarket} alt="" />
                </div>
            </div>
        </div>
    )
}

export default MobilIlova