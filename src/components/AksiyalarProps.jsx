import React from 'react'

const AksiyalarProps = (props) => {
    return (
    <div className='yangiliklar__props'>
        <h1 className="yangiliklar__props-title">{props.title}</h1>
        <p className="yangiliklar__props-text">{props.text}</p>
        <div className="yangiliklar__date">
        <a href="#">Batafsil</a>
            <div>
                <h3 className="date">19.01.2013</h3>
            </div>
        </div>
    </div>
    )
}

export default AksiyalarProps