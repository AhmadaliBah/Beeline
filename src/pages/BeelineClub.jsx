import React from 'react'
import BelClub from '../assets/images/beeline-club1.jpg' 
import BelClub2 from '../assets/images/beeline-club2.png' 
import BelClub3 from '../assets/images/beeline-club3.jpg' 
import ClubProps from '../components/ClubProps'
import Star from '../assets/images/star.jpg'
import StarGold from '../assets/images/star-silver.jpg'
import StarSilver from '../assets/images/star-gold.jpg'
import StarPlatinum from '../assets/images/star-platinum.jpg'
import HamkorlarProps from '../components/ClubProps2'
import HamkorlarImg1 from '../assets/images/toku.png'
import HamkorlarImg2 from '../assets/images/proweb.png'
import HamkorlarImg3 from '../assets/images/apexpizza.png'
import HamkorlarImg4 from '../assets/images/chekhov.png'
import { Link } from 'react-router-dom'


const BeelineClub = () => {
return (
    <div>
        <div className="router" style={{width: '200px'}}>
                <Link to={'/'}>
                    <h5 className="router__1">Bosh sahifa</h5>
                </Link>
            <i class="fa-sharp fa-solid fa-arrow-right-long"></i>
            <h5 className="router__2">Beeline Club 2.0</h5>
        </div>
        <div className='jismoniy__items' style={{paddingTop: '20px'}}>
        <img className='jismoniy-img' src={BelClub} alt="" />
        <div className='right__images'>
            <div className="paddingbottom">            
                <img src={BelClub2} alt="" className="image1" />
            </div>
            <div>
                <img src={BelClub3} alt="" className="image1" />
            </div>
        </div>
    </div>
    <div className="club__props">
    <ClubProps title="Birinchi bosqich" url={Star} text="Birinchi bosqichda: Manfaatli daqiqalar, Internet va SMS paketlar!"/>
    <ClubProps title="Ikkinchi bosqich" url={StarGold} text="Ikkinchi bosqichda: Manfaatli daqiqalar, Internet va SMS paketlar! Shuningdek, Oltin raqamlar!"/>
    <ClubProps title="Uchinchi bosqich" url={StarSilver} text="Uchinchi bosqichda: Manfaatli daqiqalar, Internet va SMS paketlar! Shuningdek, Oltin raqamlar!"/>
    <ClubProps title="To'rtinchi bosqich" url={StarPlatinum} text="To'rtinchi bosqichda: Manfaatli daqiqalar, Internet va SMS paketlar! Shuningdek, Oltin raqamlar!"/>
    </div>
    <h1 className="hamkorlar__title">Hamkorlardan aktual takliflar</h1>
    <div className="hamkorlar">
        <HamkorlarProps url={HamkorlarImg1} date="11.01.2023" title="«TOKU» restorani"/>
        <HamkorlarProps url={HamkorlarImg2} date="09.01.2023" title="PROWEB"/>
        <HamkorlarProps url={HamkorlarImg3} date="16.12.2022" title="«Apex Pizza»"/>
        <HamkorlarProps url={HamkorlarImg4} date="24.10.2022" title="Chekhov Sport Club"/>
    </div>
    <div style={{display: 'flex', justifyContent: 'center'}}>
    <button className='hamkorlar__btn'>BARCHA HAMKORLAR</button>
    </div>
    </div>
)
}

export default BeelineClub