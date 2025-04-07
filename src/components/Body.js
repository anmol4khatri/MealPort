import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerBody from "./ShimmerBody";

const Body = () => {

    const [ListOfRestaurant, setListOfRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2246322&lng=81.594554&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        
        const restaurants = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        setListOfRestaurant(restaurants);
        
    };
    
    if(ListOfRestaurant.length===0){
        return(
            <ShimmerBody/>
        );
    };

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = ListOfRestaurant.filter(
                        (restaurant) => restaurant.info.avgRating >= 4.4
                    );
                    setListOfRestaurant(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="restaurant-container">
                {ListOfRestaurant.map( (restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                ))}
            </div>
        </div>
    );
};
export default Body;