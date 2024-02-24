import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./_menu.scss";
const baseURL = "https://api.sampleapis.com/coffee/hot";


function Menu() {
    const [menu, setMenu] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getMenu();
    }, []);

    function getMenu() {
        let url = baseURL

        axios.get(url)
            .then(response => {
                if (response.data) {
                    setMenu(response.data); 
                } else {
                    setError("No meals found."); 
                }
            })
            .catch(error => {
                setError(error.message);
            });
    }

    if (error) {
        return (
            <h2>{error}</h2>
        );

    } else {
        const items = menu.map((Menu, index) => (
            <div key={index} className="menu-item">
                <img src={Menu.image} alt={Menu.id} />
                <Link to={"/Menu/"+ Menu.id}>
                <h2>{Menu.title}</h2>
                </Link>
            </div>
        ));

        return (
            <div className="Menu">{items}</div>
        );
    }
 
}

export default Menu;