import React from 'react'
import '../styles/club.css'

const ClubProps = (props) => {
    return (
        <div className='clubprops'>
            <h1 className="club__props-title">{props.title}</h1>
            <img className='club__props-img' src={props.url} alt="" />
            <p className="club__props-text">{props.text}</p>
            <div className="club-date">
                <a href="#">Batafsil</a>
                <div>
                    <h3 className="date">31.03.2020</h3>
                </div>
            </div>
        </div>
    )
}

export default ClubProps