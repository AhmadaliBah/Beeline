import {NavLink} from 'react-router-dom'
import '../styles/navbar.css'
import Logo from '../assets/icons2/main-logo.svg'

function Navbar(){
    let activeStyle = {
        borderBottom: '3px solid #000',
    };
    return(
        <nav className='navbar1'>
            <NavLink to={"/"} className="logo" >
                <img src={Logo} alt="" />
            </NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to={'/'} className="nav-items">JISMONIY SHAXSLAR UCHUN</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to={'/b2b/uz/'} className="nav-items">YURIDIK SHAXSLAR UCHUN</NavLink>
        </nav>
    )
}

export default Navbar