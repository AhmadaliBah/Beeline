import React from 'react'
import { Link } from 'react-router-dom'
import Konstruktorimg from '../assets/images/konstruktor.png'
import '../styles/button.css'

const Konstruktor = () => {
    return (
        <div className='konstruktor'>
            <div className="router" style={{width: '170px'}}>
                <Link to={'/'}>
                    <h5 className="router__1">Bosh sahifa</h5>
                </Link>
                <i class="fa-sharp fa-solid fa-arrow-right-long"></i>
                <h5 className="router__2">Konstruktor</h5>
            </div>
            <h1 className="xizmatlar__title" style={{paddingTop: '30px'}}>Sizning konstruktoringiz!</h1>
            <img className='konstruktor__img' src={Konstruktorimg} alt="" />
        </div>
    )
}

export default Konstruktor