import logo from '../Images/logo.png'
import menuTop from '../Images/menu-top-xs.png'

const Navbar = () => {
    return (  
    <ul className="navbar">
        <li><img src={logo} alt="Ironhack logo"/></li> 
        <li><img src={menuTop} alt="burguer menu icon"/></li>
    </ul>
    )
}

export default Navbar;