import React from 'react'

const SizningConsntructor = (props) => {
    return (
        <div className='props__item'>
            <img className='props__image' src={props.url} alt="" />
            <h5 className='props__title'>{props.title}</h5>
            <p className='props__text'>{props.text}</p>
            <button className='props__btn'>{props.btn}</button>
        </div>
    )
}

export default SizningConsntructor