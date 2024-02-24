import { Link } from "react-router-dom";
import "./_home.scss";
import "./NumberCounter.jsx";
import home from "../Home/img/home.jpg";
import logo from "../Home/img/Logo.jpg";
import bg from "../Home/img/bg.jpg";
import NumberCounter from "./NumberCounter.jsx";



function Home () {
    return (
        <div>
        <div className="section_1">
            <Link className="home" to="/">
            <img src={home} alt="home" />
            </Link>
        </div>
        <div className="section_2">
            <div className="point"></div>
            <h3>Cafe</h3>
            <img src={logo} alt="logo" />
            <h4>We are waiting for you to visit us every day from 8:00 a.m. to 11:00 p.m</h4>
            <p>Cafe Cafeteria is styled in the style of French Provence, a little mannered, and at the same time soulful, light pastel tones, the tantalizing aroma of fresh pastries and wine, oh this accordion and the eternal melody about love. An unforgettable place for romantic meetings, sweet, soulful cuisine, created according to the recipes of French masters. A favorite restaurant with a big heart!</p>
        </div>

        <div className="section_3">
      <div className="wrapper-count flex-row">
        <div className="item">
          <div className="number" data-max="150">
            <h4>150 <span>+</span></h4>
          </div>
          <p>VISITORS DAILY</p>
        </div>
        <div className="item">
          <div className="number" data-max="100">
            <h4>100 <span>%</span></h4>
          </div>
          <p>POSITIVE FEEDBACK</p>
        </div>
      </div>
      </div>

        <div className="section_4">
        <img src={bg} alt="bg" />
        <h3>Customer Feedback</h3>
        </div>
        </div>
)}
export default Home;
  
  