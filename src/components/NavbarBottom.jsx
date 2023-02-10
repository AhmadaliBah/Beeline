import {Link} from 'react-router-dom'
import '../styles/navbar.css'

const NavbarBottom = () => {
return (
    <nav className="navbar3">
        <Link to={'/beeline uzbekistan'} className="nav-items2">BEELINE UZBEKISTAN</Link>
        <Link to={'/beeline-tv'} className="nav-items2">BEELINE TV</Link>
        <Link to={'/beeline music'} className="nav-items2">BEELINE MUSIC & RADIO</Link>
        <Link to={'/beepul'} className="nav-items2">BEEPUL</Link>
        <Link to={'/beeline visa'} className="nav-items2">BEELINE VISA</Link>
        <Link to={'/sim'} className="nav-items2">SIM-KARTA YETKAZISH</Link>
        <Link to={'/router'} className="nav-items2">ROUTER</Link>
    </nav>
)
}

export default NavbarBottom