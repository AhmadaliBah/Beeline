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
            <Route path='/*' element={<PageNotFound />}/>
            <Route path='/button' element={<Tariflar />}/>
        </Routes>
    )
}

export default Routerss