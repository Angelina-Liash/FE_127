import { Link } from "react-router-dom";
import "./_gallery.scss";
import contacts from "../Gallery/img/contacts.jpg";
import gallery1 from "../Gallery/img/gallery1.jpg";
import gallery2 from "../Gallery/img/gallery2.jpg";
import gallery5 from "../Gallery/img/gallery5.jpg";
import gallery6 from "../Gallery/img/gallery6.jpg";
import gallery7 from "../Gallery/img/gallery7.jpg";
import group from "../Gallery/img/group.png";
import Fancybox from './Fancybox.jsx';

export default function item () {
    return (
        <div>
            <div className="gallery">
            <img src={contacts} alt="contacts" />
            <h2>GALLERY</h2>
            </div>
            <Fancybox  
            options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
          <div className="items">
            <div className="item">
                <Link className="Link" to={gallery6} data-fancybox>
              <img src={group} alt="group" />
              </Link>
              <img src={gallery6} alt="gallery6" />
            </div>
            <div className="item">
                <Link to={gallery2} data-fancybox>
              <img src={gallery2} alt="/" />
              </Link>
          </div>
            <div className="item">
                <Link to={gallery1} data-fancybox>
              <img src={gallery1} alt="/" />
              </Link>
            </div>
            <div className="item">
                <Link to={gallery5} data-fancybox>
              <img src={gallery5} alt="/" />
              </Link>
            </div>
            <div className="item">
                <Link to={gallery7} data-fancybox>
              <img src={gallery7} alt="/" />
              </Link>
            </div>
          </div>
        </Fancybox>
        </div>
    )
}
