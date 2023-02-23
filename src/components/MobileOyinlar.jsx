import React from 'react'
import Internet from '../assets/images/internet.png'
import Cobalt from '../assets/images/cobalt.png'
import Crutoy from '../assets/images/qrutoy.png'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../styles/jismoniy.css'

const MobileOyinlar = () => {
    const handleDragStart = (e) => e.preventDefault();
    const items = [
        <img className='jismoniy__carousel-img' src={Internet} alt="" onDragStart={handleDragStart} role="presentation"/>,
        <img className='jismoniy__carousel-img' src={Cobalt} alt="" onDragStart={handleDragStart} role="presentation"/>,
        <img className='jismoniy__carousel-img' src={Crutoy} alt="" onDragStart={handleDragStart} role="presentation"/>
    ];
return (
    <div>
        <div className="jismoniy__img-carousel">
        <AliceCarousel mouseTracking autoPlay autoPlayInterval={1500} infinite autoPlayStrategy='all' keyboardNavigation items={items}/>
        </div>
    <div className='jismoniy__items'>
        <img className='jismoniy-img' src={Internet} alt="" />
        <div className='right__images'>
            <div className="paddingbottom">            
                <img src={Cobalt} alt="" className="image1" />
            </div>
            <div>
                <img src={Crutoy} alt="" className="image1" />
            </div>
        </div>
    </div>
    </div>
)
}

export default MobileOyinlar