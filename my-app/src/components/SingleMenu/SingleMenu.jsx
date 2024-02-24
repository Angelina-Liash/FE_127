import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const singleMenu = "/coffee/hot/"
const baseURL = "https://api.sampleapis.com";



function SingleMenu() {
    const menuId = useParams().id;
    const [Menu, setMenu] = useState([]);
    const [error, setError] = useState(null);

    function getMenu() {
        let url = baseURL + singleMenu + menuId
        axios.get (url)
            .then(response => {
                    setMenu(response.data);
                    console.log (response.data)
            })
            .catch(error => {
                setError(error.message);
            });
    }

    useEffect (() => {getMenu();}, []);

    if (error) {
        return (
            <h2>{error}</h2>
        );
    }
    else if (Menu) {
        return (
            <div className="Menu" style={{display: "block"}}>
                <div className="img" style={{display: "flex", justifyContent: "center"}}>
                <img src={Menu.image} style = {{ width: "100%", maxWidth: "400px", objectFit: "cover", padding: "0 20px 20px 20px" }} alt={Menu.title} />
                </div>
                <h2 style={{
                fontSize: "30px",
                fontFamily: "SemiBold",
                fontStyle: "italic",
                fontWeight: 600,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                padding: "0 0 20px 0"
             
            }}>
                {Menu.title}
            </h2>
                <p style= {{fontSize: "20px", fontStyle: "italic", alignItems: "center", justifyContent: "center", display: "flex", padding: "0 20px 0 20px"}}>   {Menu.description}</p>
            </div>
        );
    }
}

export default SingleMenu;