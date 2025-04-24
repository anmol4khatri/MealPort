import { useParams } from "react-router";
import useResMenu from "../utils/useResMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const { id } = useParams();
    const resMenu = useResMenu(id);

    if(!resMenu) {return (<h5>Loading</h5>)};
        
    const basicResInfo  = resMenu?.data?.cards[2]?.card?.card?.info;
    const ItemCategories = resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( c => c?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(basicResInfo);
    return(
        <div>
            <div className="basicResInfo">
                <h1 className="text-2xl font-extrabold w-6/12 mx-auto my-5 p-1">{basicResInfo?.name}</h1>
                <div className="w-6/12 mx-auto p-5 rounded-3xl border-2 my-10 shadow-[0_10px_10px_0_rgba(0,0,0,0.3)]">
                    <h4 className="text-lg font-bold my-1">{basicResInfo?.avgRating}★ ({basicResInfo?.totalRatingsString}) • {basicResInfo?.costForTwoMessage}</h4>
                    <h3 className="font-bold">{basicResInfo?.cuisines.join(", ")}</h3>
                    <h4 className="my-3">{basicResInfo?.locality} → You : {basicResInfo?.sla?.slaString}</h4>
                </div>
            </div>
            <div className="menuHolder">
                <h1 className="w-2/12 text-lg mx-auto">
                ✦•┈๑⋅⋯ Menu ⋯⋅๑┈•✦</h1>
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
  