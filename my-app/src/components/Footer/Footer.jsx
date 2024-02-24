import "./footer.scss";
import logo from "../Footer/img/Logo.jpg";
import footer from "../Footer/img/footer.jpg";
import { Link } from "react-router-dom";
import inst from "../Footer/img/inst.png";
import facebook from "../Footer/img/facebook.svg";
import twitter from "../Footer/img/tw.svg";

function Footer () {

    return (
        <footer>
            <div>
                <div className="title">
                <img src={footer} alt="footer" />
                </div>
                <div className="info">
                <Link className="logo" to="/">
                <img src={logo} alt="logo" />
            </Link>
        <nav>
            <ul>
                <li>Opening hours: from 8:00 to 23:00.</li>
                <li>14 Christopher St, New York, NY 10014-3523</li>
                <li>+1 646-756-4145</li>
            </ul>
        </nav>
                </div>
        <div className="svg">
            <ul>
                <li><img src={facebook} alt="facebook" /></li>
                <li><img src={inst} style={{width: "27px", height: "27px"}} alt="instagram" /></li>
                <li><img src={twitter} alt="tw" /></li>
            </ul>
        </div>
            </div>
            
        </footer>
    )
}
export default Footer;