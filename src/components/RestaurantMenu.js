import { useParams } from "react-router";
import { Restaurant_Menu_Prefix } from "../utils/constants";
import { useState, useEffect } from "react";

const RestaurantMenu = () => {

    const [ resMenu, setresMenu ] = useState(null);
    const { id } = useParams();

    useEffect( () => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const menu = await fetch(Restaurant_Menu_Prefix + id);
        const jsonMenu = await menu.json();
        setresMenu(jsonMenu);
    };

    if(!resMenu) {return (<h5>Loading</h5>)};
        
    const basicResInfo  = resMenu?.data?.cards[2]?.card?.card?.info;
    const menuHolder = resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return(
        <div>
            <div className="basicResInfo">
                <h1>{basicResInfo?.name}</h1>
                <h2>{basicResInfo?.locality}</h2>
                <h3>Cuisines: {basicResInfo?.cuisines.join(", ")}</h3>
                <h3>{basicResInfo?.CostForTwoMessage}</h3>
                <h4>Rating: {basicResInfo?.avgRating}</h4>
            </div>
            <div className="menuHolder">
                <h1>Menu</h1>
                {
                    menuHolder?.itemCards?.map((item) => (
                        <p key={item?.card?.info?.id}>{item?.card?.info?.name} : ₹ {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</p>
                    ))
                }
            </div>
        </div>
    );
};

export default RestaurantMenu;
  