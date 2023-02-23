import React from 'react'

const RoumingYangiliklar = () => {
  return (
    <div>
        <div style={{borderBottom: '1px solid #cacaca'}}>
            <h1 className="ommabop__title">Yangiliklar</h1>
            <ul className="yangiliklar__items">
                <li className="yangiliklar__item" style={{height: '400px'}}>
                    <h1 className="yangiliklar__title">Chegirmalar davom etadi! Turkiya, Misr, Shri-Lanka, Tailand va Malayziyada kiruvchi va chiquvchi qo‘ng‘iroqlar uchun 70% gacha chegirmalar!</h1>
                    <p className="yangiliklar__text">Biz roumingdagi qo‘ng‘iroqlar uchun joriy chegirmalarning amal qilish muddatini 2023-yilning oxirigacha uzaytirdik. Endi O‘zbekistonga chiquvchi qo‘ng‘iroqlar va mezbon mamlakatdagi mahalliy raqamlarga chiquvchi qo‘ng‘iroqlar, shuningdek, barcha kiruvchi qo‘ng‘iroqlar daqiqasiga atigi 6 500 so‘mdan.</p>
                    <div className="yangiliklar__date">
                        <a href="#">Batafsil</a>
                        <div>
                            <h3 className="date">19.01.2013</h3>
                        </div>
                    </div>
                </li>
                <li className="yangiliklar__item" style={{height: '400px'}}>
                    <h1 className="yangiliklar__title">Roumingda Maldiv orollarida internetga 97% chegirma! Beeline bilan birga sayohat qiling!!</h1>
                    <p className="yangiliklar__text">Beeline Maldiv orollarida roumingda internet narxini oldindan to‘lov tizimi abonentlariga 1 Mb uchun 1500 so‘mgacha arzonlashtiradi.</p>
                    <div className="yangiliklar__date">
                        <a href="#">Batafsil</a>
                        <div>
                            <h3 className="date">19.01.2013</h3>
                        </div>
                    </div>
                </li>
                <li className="yangiliklar__item" style={{height: '400px'}}>
                    <h1 className="yangiliklar__title">«Beeline»dan yangilangan rouming-paketlari bilan sayohat yanada qulayroq!</h1>
                    <p className="yangiliklar__text">Beeline dunyo bo‘ylab sayohat qilish chog‘ida qulay rouming-paketlari bilan Sizni xursand qilishda davom etmoqda. Internetdan tashqari, paketlar roumingda qo‘ng‘iroqlar uchun daqiqalarni ham o‘z ichiga oladi, ular dunyoning 39 mamlakatida amal qiladi. Endi chet elda muloqot qilish yanada oson va foydaliroq! </p>
                    <div className="yangiliklar__date">
                        <a href="#">Batafsil</a>
                        <div>
                            <h3 className="date">19.01.2013</h3>
                        </div>
                    </div>
                </li>
                <li className="yangiliklar__item" style={{height: '400px'}}>
                    <h1 className="yangiliklar__title">Beeline ning rouming xizmati bilan Muqaddas Haj safari!</h1>
                    <p className="yangiliklar__text">Beeline Saudiya Arabistonining muqaddas joylarini ziyorat qiluvchi mijozlarini an'anaviy tarzda qo'llab-quvvatlaydi. Siz o'z raqamingizda arzonlashtirilgan narxlarda aloqada qolishingiz mumkin!</p>
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
    </div>
  )
}

export default RoumingYangiliklar