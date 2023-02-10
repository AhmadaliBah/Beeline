import React from 'react'

const Yangiliklar = () => {
    return (
        <div style={{borderBottom: '1px solid #cacaca'}}>
            <h1 className="ommabop__title">Yangiliklar</h1>
            <ul className="yangiliklar__items">
                <li className="yangiliklar__item">
                    <h1 className="yangiliklar__title">«Juma takliflari» aksiyasi</h1>
                    <p className="yangiliklar__text">«Juma takliflari» aksiyasi doirasida navbatdagi maxsus takliflarifimizga ulanishga shoshiling.</p>
                    <div className="yangiliklar__date">
                        <a href="#">Batafsil</a>
                        <div>
                            <h3 className="date">19.01.2013</h3>
                        </div>
                    </div>
                </li>
                <li className="yangiliklar__item">
                    <h1 className="yangiliklar__title">Endi daqiqalarni internetga almashtirish yanada arzonroq!</h1>
                    <p className="yangiliklar__text">Daqiqalardan foydalanib ulgurmayapsizmi va ular kuyib ketyaptimi? Ularni internetga almashtiring! Zaruriyat tug‘ilganda esa, megabaytlar evaziga qo‘shimcha daqiqalarga ega bo‘ling!</p>
                    <div className="yangiliklar__date">
                        <a href="#">Batafsil</a>
                        <div>
                            <h3 className="date">19.01.2013</h3>
                        </div>
                    </div>
                </li>
                <li className="yangiliklar__item">
                    <h1 className="yangiliklar__title">Mijozlar diqqatiga</h1>
                    <p className="yangiliklar__text">Hurmatli mijozlar, shuni ma’lum qilamizki, 2023-yil 10-fevraldan Beeline tarmog‘iga yangi ulanishda quyidagi o‘zgarishlar kiritiladi:</p>
                    <div className="yangiliklar__date">
                        <a href="#">Batafsil</a>
                        <div>
                            <h3 className="date">19.01.2013</h3>
                        </div>
                    </div>
                </li>
                <li className="yangiliklar__item">
                    <h1 className="yangiliklar__title">Beeline Uzbekistan moslashuvchan to'lov tizimini rivojlantirishga yordam beradi</h1>
                    <p className="yangiliklar__text">Beeline Uzbekistan va IMAN elektron platformasi hamkorlik shartnomasini imzoladi. </p>
                    <div className="yangiliklar__date">
                        <a href="#">Batafsil</a>
                        <div>
                            <h3 className="date">19.01.2013</h3>
                        </div>
                    </div>
                </li>
            </ul>
            <div style={{textAlign: 'center', paddingBottom:'40px'}}>
                <button className='ommabop__button'>Barcha yangiliklar</button>
            </div>
        </div>
    )
}

export default Yangiliklar