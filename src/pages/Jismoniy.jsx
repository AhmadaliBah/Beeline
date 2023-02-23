import React from 'react'
import InternetPaketlar from '../components/InternetPaketlar'
import MobileOyinlar from '../components/MobileOyinlar'
import Ommabop from '../components/Ommabop'
import SizningConsntructor from '../components/SizningConsntructor'
import Xizmatlar from '../components/Xizmatlar'
import Yangiliklar from '../components/Yangiliklar'
import { Link } from 'react-router-dom'
import '../styles/jismoniy.css'
import Constructor from '../assets/images/constructor.png'
import Simcarta from '../assets/images/simcarta.png'
import Plastik from '../assets/images/plastik.png'
import Sumka from '../assets/images/sumka.png'
import Sim from '../assets/images/sim.png'
import World from '../assets/images/world.png'
import MobilIlova from '../components/MobilIlova'

function Jismoniy() {
return (
    <div className='jismoniy'>
        <MobileOyinlar />
        <div className='props__items'>
            <Link style={{textDecoration: 'none', color: 'black'}} to={'/konstruktor'}>
                <SizningConsntructor url={Constructor} title="Sizning Konstruktoringiz" text="Endi tarifingiz qanday bo'lishini, siz hal qilasiz!" btn="Batafsil"/>
            </Link>
            <Link style={{textDecoration: 'none', color: 'black'}} to={'/raqamni-oling'}>
                <SizningConsntructor url={Simcarta} title="Raqamni oling" text="Sizga tez va qulay tarzda chiroyli xonani tanlashni taklif qilamiz." btn="Nomerni tanlang"/>
            </Link>
            <Link style={{textDecoration: 'none', color: 'black'}} to={"/hisobni-to'ldirish"}>
                <SizningConsntructor url={Plastik} title="Hisobni to'ldirish" text="Mobil raqamingiz hisobini onlayn toʼldiring" btn="To'dirish"/>
            </Link>
            <Link style={{textDecoration: 'none', color: 'black'}} to={'/internet-paketlar'}>
                <SizningConsntructor url={Sumka} title="Internet paketlari" text="Sizning xizmatingizda 14 ta internet toʼplami." btn="Paketni tanlang"/>
            </Link>
            <Link style={{textDecoration: 'none', color: 'black'}} to={'/e-sim'}>
                <SizningConsntructor url={Sim} title="eSIM" text="«eSIM» xizmatini bepul ulang!" btn="Ulanish"/>
            </Link>
            <Link style={{textDecoration: 'none', color: 'black'}} to={'/qamrov-hududi'}>
                <SizningConsntructor url={World} title="Qamrov hududi va ofislar" text="Ofis manzillari va qamrov xaritasini koʼring" btn="Batafsil"/>
            </Link>
        </div>
        <div style={{paddingTop: '20px'}}>
            <Ommabop />
        </div>
        <div style={{paddingTop: '80px'}}>
            <MobilIlova />
        </div>
        <div>
            <InternetPaketlar />
        </div>
        <div>
            <Xizmatlar />
        </div>
        <div style={{paddingTop: '40px'}}>
            <Yangiliklar />
        </div>
    </div>
)
}

export default Jismoniy