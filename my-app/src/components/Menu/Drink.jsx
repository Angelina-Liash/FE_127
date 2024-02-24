import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./_menu.scss";
const baseURL = "https://api.sampleapis.com/coffee/hot";


function Drink() {
    const [drink, setDrink] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getDrink();
    }, []);

    function getDrink() {
        let url = baseURL

        axios.get(url)
            .then(response => {
                if (response.data) {
                    setDrink(response.data); 
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
        const items = drink.map((Drink, index) => (
            <div key={index} className="drink-item">
                <img src={Drink.image} alt={Drink.id} />
                <Link to={"/Menu/"+ Drink.id}>
                <h2>{Drink.title}</h2>
                </Link>
            </div>
        ));

        return (
            <div className="Drink">{items}</div>
        );
    }
 
}

export default Drink;