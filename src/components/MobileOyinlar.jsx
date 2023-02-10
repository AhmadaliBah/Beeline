import React from 'react'
import Internet from '../assets/images/internet.png'
import Cobalt from '../assets/images/cobalt.png'
import Crutoy from '../assets/images/qrutoy.png'

const MobileOyinlar = () => {
return (
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
)
}

export default MobileOyinlar