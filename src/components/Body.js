import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {

    const [ListOfRestaurant, setListOfRestaurant] = useState(resList);

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = ListOfRestaurant.filter(
                        (restaurant) => restaurant.info.rating.aggregate_rating > 4.2
                    );
                    setListOfRestaurant(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="restaurant-container">
                {ListOfRestaurant.map( (restaurant) => (
                    <RestaurantCard key={restaurant.info.resId} resData={restaurant}/>
                ))};
            </div>
        </div>
    );
};
export default Body;