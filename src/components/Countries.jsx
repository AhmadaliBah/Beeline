import React from 'react'

const Countries = (props) => {
    return (
        <div className='country__box'>
            <img src={props.url} alt="" className='country__img'/>
            <h3 className='country__title'>{props.title}</h3>
        </div>
    )
}

export default Countries