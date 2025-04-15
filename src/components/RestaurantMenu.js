import { useParams } from "react-router";
import useResMenu from "../utils/useResMenu";

const RestaurantMenu = () => {

    const { id } = useParams();
    const resMenu = useResMenu(id);

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
  