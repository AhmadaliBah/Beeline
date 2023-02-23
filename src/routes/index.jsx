import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Jismoniy from '../pages/Jismoniy'
import Yuridik from '../pages/Yuridik'
import Tariflar from '../pages/Tariflar'
import InternetPaketlar from '../pages/InternetPaketlar'
import BeelineClub from '../pages/BeelineClub'
import BeelineUzb from '../pages/BeelineUzb'
import BeelineTv from '../pages/BeelineTv'
import BeelineMusic from '../pages/BeelineMusic'
import PageNotFound from '../components/PageNotFound'
import Rouming from '../pages/Rouming'
import Xizmatlar from '../pages/Xizmatlar'
import Yangiliklar from '../pages/Yangiliklar'
import Aksiyalar from '../pages/Aksiyalar'
import Yordam from '../pages/Yordam'
import Konstruktor from '../pages/Konstruktor'
import RaqamniOling from '../pages/RaqamniOling'
import HisobniToldirish from '../pages/HisobniToldirish'
import Esim from '../pages/Esim'
import QamrovHududi from '../pages/QamrovHududi'

const Routerss = () => {
    return (
        <Routes>
            <Route path="/" element={<Jismoniy />}/>
            <Route path="/b2b/uz/" element={<Yuridik />}/>
            <Route path='/tariflar' element={<Tariflar />}/>
            <Route path='/internet-paketlar' element={<InternetPaketlar />}/>
            <Route path='/beeline club' element={<BeelineClub />}/>
            <Route path='/beeline uzbekistan' element={<BeelineUzb />}/>
            <Route path='/beeline-tv' element={<BeelineTv />}/>
            <Route path='/beeline music' element={<BeelineMusic />}/>
            <Route path='/rouming' element={<Rouming />}/>
            <Route path='/xizmatlar' element={<Xizmatlar />}/>
            <Route path='/yangiliklar' element={<Yangiliklar />}/>
            <Route path='/aksiyalar' element={<Aksiyalar />}/>
            <Route path='/yordam' element={<Yordam />}/>
            <Route path='/*' element={<PageNotFound />}/>
            <Route path='/konstruktor' element={<Konstruktor />}/>
            <Route path='/raqamni-oling' element={<RaqamniOling />}/>
            <Route path="/hisobni-to'ldirish" element={<HisobniToldirish />}/>
            <Route path='/e-sim' element={<Esim />}/>
            <Route path='/qamrov-hududi' element={<QamrovHududi />}/>
        </Routes>
    )
}

export default Routerss