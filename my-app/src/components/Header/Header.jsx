import "./_header.scss";
import { NavLink, Link } from "react-router-dom";
import logo from "../Header/img/Logo.jpg";
import { useState } from "react";

function Header () {
    const [isActive, setActive] = useState (false);
    function ToggleClass () {
        setActive (!isActive);
    }
return (
    <header>
    <div className={ isActive ? "wrapper container active" : "wrapper container" }>
    <Link className="logo" to="/">
        <img src={logo} alt="logo" />
    </Link>
    <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
            <li><NavLink to="/menu">Menu</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    </nav>
    <div className="button">
        <button>Reservation</button>
    </div>
    <div 
        onClick={ToggleClass}
        className="burger">
        <span></span>
        <span></span>
        <span></span>
    </div>
    </div>
    </header>
)


}
export default Header