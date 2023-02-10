import React from 'react'
import Navbar from '../components/Navbar'
import Navbar2 from '../components/Navbar2'
import NavbarMedium from '../components/NavbarMedium'
import NavbarBottom from '../components/NavbarBottom'
import Routerss from '../routes'
import Logo from '../assets/icons2/main-logo.svg'

const Root = () => {
    return (
    <div>
        <div className="navbars1">
            <Navbar />
            <Navbar2 />
        </div>
        <div className="navbars2">
            <NavbarMedium />
        </div>
        <div className="navbars3">
            <NavbarBottom />
        </div>
        <div style={{backgroundColor: '#f0f1f3'}}>
        <div className="r">
            <Routerss />
        </div>
        </div>
        <div className="footer">
            <div className="footer__top">
                <ul className="footer__top-items">
                    <li className="footer__top-item">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="15" cy="15" r="15" fill="black"></circle>
                                <path d="M11 10.5833C11 12.4068 11.7475 13.7297 12.9134 14.718C14.1059 15.7288 15.8972 15.7264 17.0625 14.6842L18.1885 13.3684C18.6851 12.5832 19 11.6538 19 10.5833C19 7.82191 17.2091 6 15 6C12.7909 6 11 7.82191 11 10.5833Z" stroke="white" stroke-linecap="round"></path>
                                <path d="M7.01568 19.6561L6.75605 20.5341C6.34776 21.9148 7.19836 23.3516 8.6053 23.6578L10.5196 24.0743C13.321 24.6838 16.2229 24.6638 19.0156 24.0156L21.1406 23.5224C22.1829 23.2805 22.8535 22.265 22.6665 21.2115L22.4269 19.8605C22.2645 18.9455 21.8239 18.1029 21.165 17.4476C20.2799 16.5672 18.9596 16.2901 17.7952 16.7405L16.7733 17.1358C15.487 17.6334 14.0614 17.6334 12.7751 17.1358L11.9164 16.8037C10.6528 16.3149 9.21987 16.6155 8.2593 17.571C7.67645 18.1507 7.24879 18.8677 7.01568 19.6561Z" stroke="white" stroke-linecap="round"></path>
                        </svg>
                        <div className="icon__right-content">
                            <h3 className="footer__icon-title">Shaxsiy kabinet</h3>
                            <h5 className='footer__icon-text'>Sizning raqamingiz uchun barcha statistika</h5>
                        </div>
                    </li>
                    <li className="footer__top-item">
                        <svg width="33" height="33" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="15" r="15" fill="black"></circle>
                        <path d="M6 15.7779C6 14.2744 7.21878 13.0557 8.72222 13.0557H9.11111V18.5001H8.72222C7.21878 18.5001 6 17.2813 6 15.7779V15.7779Z" stroke="white"></path>
                        <path d="M20.0002 18.5001V13.0557H20.3891C21.8925 13.0557 23.1113 14.2744 23.1113 15.7779V16.5989C23.1113 17.6489 22.2601 18.5001 21.2101 18.5001V18.5001" stroke="white" stroke-linecap="round"></path>
                        <path d="M20.0002 13.0556V12C20.0002 9.79086 18.2094 8 16.0002 8H13.1113C10.9022 8 9.11133 9.79086 9.11133 12V13.0556" stroke="white"></path>
                        <path d="M19.9997 18.3057V18.3057C19.9997 19.9165 18.6938 21.2223 17.083 21.2223H15.333" stroke="white"></path>
                        <rect x="13.7783" y="20.4443" width="2.72222" height="1.55556" rx="0.777778" fill="white"></rect>
                        <path d="M15.1392 8.19434V8.19434C15.1392 10.2347 13.4852 11.8888 11.4448 11.8888H10.667" stroke="white" stroke-linecap="round"></path>
                        <path d="M20.3887 11.8887H18.8331C16.9001 11.8887 15.3331 10.3217 15.3331 8.38867V8.38867" stroke="white"></path>
                        <path d="M12.6113 17.7227V17.7227C13.9163 18.5531 15.5841 18.5531 16.8891 17.7227V17.7227" stroke="white" stroke-linecap="round"></path>
                        </svg>
                        <div className="icon__right-content">
                            <h3 className="footer__icon-title">Beeline aloqa markazi</h3>
                            <h5 className='footer__icon-text'>Biz bilan bog'lanishning 5 dan ortiq usullari</h5>
                        </div>
                    </li>
                    <li className="footer__top-item">
                        <svg width="50" height="50" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="15" r="15" fill="black"></circle>
                        <path d="M19.0001 5H10.6191C9.51457 5 8.61914 5.89543 8.61914 7V23C8.61914 24.1046 9.51457 25 10.6191 25H19.0001C20.1047 25 21.0001 24.1046 21.0001 23V21.8085V19.8936V7C21.0001 5.89543 20.1047 5 19.0001 5Z" stroke="white" stroke-linecap="round"></path>
                        <path d="M14.333 23.0957H15.2854" stroke="white" stroke-linecap="round"></path>
                        <path d="M11.3027 16.4619H17.9261" stroke="white"></path>
                        <path d="M10.9131 14.5127H18.3157" stroke="white"></path>
                        <path d="M11.6924 12.5654H18.3158" stroke="white"></path>
                        <circle cx="14.8092" cy="14.5133" r="3.78571" stroke="white"></circle>
                        </svg>
                        <div className="icon__right-content">
                            <h3 className="footer__icon-title">Mobil yordamchi Beeline Uzbekistan (iOS va Android)</h3>
                            <h5 className='footer__icon-text'>Raqamingiz va tarifingizni boshqaring</h5>
                        </div>
                    </li>
                    <li className="footer__top-item">
                    <svg width="35" height="35" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="15" r="15" fill="black"></circle>
                        <path d="M12.9375 15.5479H23.8125" stroke="white" stroke-linecap="round"></path>
                        <path d="M12.9375 16.7412H23.8125" stroke="white" stroke-linecap="round"></path>
                        <path d="M14.0625 12.3652H16.125" stroke="white" stroke-linecap="round"></path>
                        <path d="M18.375 10.7737V7C18.375 6.44772 17.9273 6 17.375 6H10C9.44772 6 9 6.44772 9 7V22.1059C9 22.6581 9.44772 23.1059 10 23.1059H17.375C17.9273 23.1059 18.375 22.6581 18.375 22.1059V18.3321" stroke="white"></path>
                        <path d="M9.1875 20.3213H18" stroke="white" stroke-linecap="round"></path>
                        <path d="M13.125 21.5146H14.0625" stroke="white" stroke-linecap="round"></path>
                        <path d="M9 7.5918H18" stroke="white" stroke-linecap="round"></path>
                        <rect x="12.75" y="10.7734" width="11.25" height="7.5584" rx="1" stroke="white"></rect>
                        </svg>
                        <div className="icon__right-content">
                            <h3 className="footer__icon-title">Balansni to'ldirish</h3>
                            <h5 className='footer__icon-text'>Uyingizdan chiqmasdan balansingizni to'ldiring</h5>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="footer__items">
                    <ul class="footer__texts">
                        <li class="footer__text-title">Mobil aloqa</li>
                        <li class="footer__text">Tariflar</li>
                        <li class="footer__text">Xizmatlar</li>
                        <li class="footer__text">Xizmatlar uchun to'lov</li>
                        <li class="footer__text">Aksiyalar</li>
                        <li class="footer__text">Rouming</li>
                        <li class="footer__text">Ofislar va qamrov hududi</li>
                        <li class="footer__text">"Beeline"dan 4G</li>
                    </ul> 
                    <ul class="footer__texts">
                        <li class="footer__text-title">Statsionar aloqa</li>
                        <li class="footer__text">Xalqaro telefoniya</li>
                        <li class="footer__text">Telefon kodlari</li>
                        <li class="footer__text">Telefon tarmog’iga ulanish</li>
                        <li class="footer__text">Simli Internet</li>
                    </ul>
                    <ul class="footer__texts">
                        <li class="footer__text-title">Ilovalar va xizmatlar</li>
                        <li class="footer__text">Beeline Uzbekistan ilovasi</li>
                        <li class="footer__text">Beeline TV</li>
                        <li class="footer__text">Beeline Music & Radio</li>
                        <li class="footer__text">Beepul to'lov tizimi</li>
                        <li class="footer__text">Axborot va ko'ngil ochar xizmatlar</li>
                        <li class="footer__text">Beeline Club 2.0</li>
                        <li class="footer__text">Data center</li>
                    </ul>
                    <ul class="footer__texts">
                        <li class="footer__text-title">Kompaniya</li>
                        <li class="footer__text">Biz haqimizda</li>
                        <li class="footer__text">Komplaens</li>
                        <li class="footer__text">Huquqiy hujjatlar</li>
                        <li class="footer__text">Bo'sh ish o'rinlar</li>
                        <li class="footer__text">Amaliyot</li>
                        <li class="footer__text">Vazifa va yondashuv</li>
                        <li class="footer__text">Tenderlar</li>
                        <li class="footer__text">Ofislar</li>
                        <li class="footer__text">Rahbariyat</li>
                        <li class="footer__text">Qanday diler bo'lish mumkin</li>
                        <li class="footer__text">Kontaktlar</li>
                    </ul>
                    <ul className="footer__texts">
                        <li className="footer__ask">Savol bering</li>
                        <li className="footer__abonent">0611</li>
                        <li className="footer__abonent-text">Beeline abonentlari uchun</li>
                        <li className="footer__number">(90) 185-00-55</li>
                        <li className="footer__number-text">Har qanday raqamdan qo'ng'iroqlar uchun</li>
                    </ul>
                </div>
                <div className="footer__bottom">
                    <div className="footer__bottom-left">
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <img className='footer__logo' src={Logo} alt="" />
                            <h3 className="footer__logo-right">2023</h3>
                        </div>
                        <div>
                            <p className="footer__bottom-text">Saytimizdan foydalanishni davom ettirish orqali siz Maxfiylik siyosati va foydalanuvchi shartnomasiga muvofiq cookie fayllari va boshqa foydalanuvchi ma'lumotlarini qayta ishlashga rozilik bildirasiz.</p>
                        </div>
                    </div>
                    <div className="footer__bottom-right">
                        <ul className="footer__icons">
                            <a href="https://ru-ru.facebook.com/beeline.uz/">
                            <li className="footer__icon i1">
                                <i class="fa-brands fa-facebook-f"></i>
                            </li>
                            </a>
                            <a href="https://instagram.com/beeline_uzbekistan">
                            <li className="footer__icon i2">
                                <i class="fa-brands fa-instagram"></i>
                            </li>
                            </a>
                            <a href="https://twitter.com/beeline_uz">
                            <li className="footer__icon i3">
                                <i class="fa-brands fa-twitter"></i>
                            </li>
                            </a>
                            <a href="https://ok.ru/beeline.uz">
                            <li className="footer__icon i4">
                                <i class="fa-brands fa-odnoklassniki"></i>
                            </li>
                            </a>
                            <a href="https://youtube.com/channel/UCNs2pdNJbkPYDQt8PSOWC4w">
                            <li className="footer__icon i5">
                                <i class="fa-brands fa-youtube"></i>
                            </li>
                            </a>
                            <a href="https://t.me/ConsultantBeelineUzBot">
                            <li className="footer__icon i6">
                                <i class="fa-brands fa-telegram"></i>
                            </li>
                            </a>
                        </ul>
                    </div>
                </div>
        </div>
    </div>
    )
}

export default Root