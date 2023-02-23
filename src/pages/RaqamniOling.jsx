import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../styles/button.css'
import Raqam1 from '../assets/images/raqamniOling.jpg'
import Raqam2 from '../assets/images/raqamniOling2.jpg'
import Raqam3 from '../assets/images/raqamniOling3.jpg'
import RaqamItem1 from '../assets/images/raqam-item1.png'
import RaqamItem2 from '../assets/images/raqam-item2.png'
import RaqamItem3 from '../assets/images/raqam-item3.png'

const RaqamniOling = () => {
    const items=[
        <img className='raqam__img' src={Raqam1} alt="" />,
        <img className='raqam__img' src={Raqam2} alt="" />,
        <img className='raqam__img' src={Raqam3} alt="" />
    ]
    return (
        <div>
            <AliceCarousel mouseTracking autoPlay autoPlayInterval={2000} infinite keyboardNavigation items={items}/>
            <h1 className="raqam__title">Выберите свой красивый номер</h1>
            <div className="raqam__items">
                <div className="raqam__item">
                    <div>
                        <img className='left-item' style={{width: '372px', height:'300px'}} src={RaqamItem1} alt="" />
                    </div>
                    <div className="right-item">
                        <h1 className='right__item-title'>Доставка SIM-карты курьером</h1>
                        <p className="right__item-text">Услуга "Доставка курьером" позволяет оформить доставку выбранного номера по указанному адресу.</p>
                        <div className="right__btn-box">
                            <button className='right__item-btn'>Оформить</button>
                        </div>
                    </div>
                </div>
                <div className="raqam__item">
                    <div>
                        <img className='left-item' style={{width: '372px', height:'300px'}} src={RaqamItem2} alt="" />
                    </div>
                    <div className="right-item">
                        <h1 className='right__item-title'>eSIM</h1>
                        <p className="right__item-text">eSIM - это та же SIM-карта, только цифровая. eSIM включает в себя все функции, что и обычная SIM-карта (интернет, SMS и звонки), а также её нельзя сломать или потерять.</p>
                        <div className="right__btn-box">
                            <button className='right__item-btn'>Заказать</button>
                        </div>
                    </div>
                </div>
                <div className="raqam__item">
                    <div>
                        <img className='left-item' style={{width: '372px', height:'300px'}} src={RaqamItem3} alt="" />
                    </div>
                    <div className="right-item">
                        <h1 className='right__item-title'>Доставка SIM-карты курьером</h1>
                        <p className="right__item-text">Услуга "Доставка курьером" позволяет оформить доставку выбранного номера по указанному адресу.</p>
                        <div className="right__btn-box">
                            <button className='right__item-btn'>Забронировать</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RaqamniOling