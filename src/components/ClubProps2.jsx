import React from 'react'
import '../styles/club.css'

const HamkorlarProps = (props) => {
    return (
        <div className='hamkorlar__props'>
            <img className='hamkorlar__props-img' src={props.url} alt="" />
            <div className="hamkorlar__titles-box">
                <h3 className="hamkorlar__props-date">{props.date}</h3>
                <h1 className="hamkorlar__props-title">{props.title}</h1>
            </div>
            <div className="hamkorlar__btn-box">
                <button className='hamkorlar__props-btn'>BATAFSIL</button>
            </div>
        </div>
    )
}

export default HamkorlarProps