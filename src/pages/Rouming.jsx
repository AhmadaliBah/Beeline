import React from 'react'
import '../styles/rouming.css'
import Rouming1 from '../assets/images/rouming1.jpg'
import Rouming2 from '../assets/images/rouming2.jpg'
import Rouming3 from '../assets/images/rouming3.jpg'
import Sayohat from '../components/Sayohat'
import Accordions from '../components/Accordions'
import RoumingYangiliklar from '../components/RoumingYangiliklar'
import { Link } from 'react-router-dom'


const Rouming = () => {
    return (
        <div>
        <div className="router" style={{width: '150px'}}>
                <Link to={'/'}>
                    <h5 className="router__1">Bosh sahifa</h5>
                </Link>
            <i class="fa-sharp fa-solid fa-arrow-right-long"></i>
            <h5 className="router__2">Rouming</h5>
        </div>
        <div className='jismoniy__items' style={{paddingTop: '20px'}}>
        <img className='jismoniy-img' src={Rouming1} alt="" />
        <div className='right__images'>
            <div className="paddingbottom">            
                <img src={Rouming2} alt="" className="image1" />
            </div>
            <div>
                <img src={Rouming3} alt="" className="image1" />
            </div>
        </div>
        </div>
            <Sayohat />
            <Accordions />  
            <RoumingYangiliklar />
        </div>
    )
}

export default Rouming