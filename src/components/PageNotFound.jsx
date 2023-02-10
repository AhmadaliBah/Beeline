import React from 'react'
import Search from '../assets/icons/search.svg'

const PageNotFound = () => {
    return (
    <div className='pagenotfound'>
        <h1>Sahifa aniqlanmadi</h1>
        <h3>Qidiruv yoki manzillardan foydalaning</h3>
        <div className="input">
            <input type="text" placeholder='Qidiruv'/>
            <img className='qidiruv' src={Search} alt="" />
        </div>
    </div>
    )
}

export default PageNotFound