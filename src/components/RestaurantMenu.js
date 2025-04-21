import { useParams } from "react-router";
import useResMenu from "../utils/useResMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const { id } = useParams();
    const resMenu = useResMenu(id);

    if(!resMenu) {return (<h5>Loading</h5>)};
        
    const basicResInfo  = resMenu?.data?.cards[2]?.card?.card?.info;
    const ItemCategories = resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( c => c?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

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
                    ItemCategories.map( (category) => (
                        <RestaurantCategory key={category?.card?.card?.categoryId} data={category?.card?.card}/>
                    ))
                }
            </div>
        </div>
    );
};

export default RestaurantMenu;
  