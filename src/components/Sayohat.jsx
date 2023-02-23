import React from 'react'
import Countries from './Countries'

const Sayohat = () => {
    return (
        <div className='sayohat'>
            <div className="sayohat__title">Sayohat qilishga qayerga bormoqchisiz?</div>
            <div className="input__box">
                <input className='sayohat__input' type="text" placeholder='Davlatni tanlang'/>
            </div>
            <div className="sayohat__title">Mashhur mamlakatlar</div>
            <div style={{display: 'flex', justifyContent:'center', paddingTop: '20px'}}>
            <div className="countries__box">
                <Countries url="https://beeline.uz/binaries/content/gallery/mainsite/roaming/united-arab-emirates.png" title="Birlashgan Arab Amirliklari"/>
                <Countries url="https://beeline.uz/binaries/content/gallery/malayziya.jpg" title="Malayziya"/>
                <Countries url="https://beeline.uz/binaries/content/gallery/%D0%B5%D0%B3%D0%B8%D0%BF%D0%B5%D1%82.jpg" title="Misr"/>
                <Countries url="https://beeline.uz/binaries/content/gallery/maldiv1.jpg" title="Maldiv orollari"/>
                <Countries url="https://beeline.uz/binaries/content/gallery/%D0%BA%D0%B0%D1%82%D0%B0%D1%80.jpg" title="Qatar"/>
                <Countries url="https://beeline.uz/binaries/content/gallery/kyrgyzstan.png" title="Qirg'iziston"/>
                <div className="qozogiston">
                <Countries url="https://beeline.uz/binaries/content/gallery/kz-flag.svg " title="Qozog'iston"/>
                </div>
                <Countries url="https://beeline.uz/binaries/content/gallery/russia.png" title="Rossiya"/>
                <Countries url="https://beeline.uz/binaries/content/gallery/shri-lanka.jpg" title="Shri Lanka"/>
                <Countries url="https://beeline.uz/binaries/content/gallery/mainsite/roaming/saudi-arabia.png" title="Saudiya Arabistoni"/>
                <Countries url="https://beeline.uz/binaries/content/gallery/%D1%82%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD%D0%B4.jpg" title="Tailand"/>
                <Countries url="https://beeline.uz/binaries/content/gallery/mainsite/roaming/turkey.png" title="Turkiya"/>
            </div>
            </div>
        </div>
    )
}

export default Sayohat