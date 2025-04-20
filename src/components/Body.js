import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerBody from "./ShimmerBody";
import { Link } from "react-router-dom"
import { Restaurant_List_API } from "../utils/constants";

const Body = () => {
  const [ListOfRestaurant, setListOfRestaurant] = useState([]);
  const [SearchQuery, setSearchQuery] = useState([]);
  const [SearchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Restaurant_List_API);
    const json = await data.json();

    const restaurants =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setListOfRestaurant(restaurants);
    setSearchQuery(restaurants);
  };

  if (ListOfRestaurant.length === 0) {
    return <ShimmerBody />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Restaurant Name"
            className="search-bar w-96 h-12 text-xl m-3 p-3 border-2 rounded-xl"
            value={SearchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn w-24 h-12 border-3 rounded-xl text-lg font-bold hover:cursor-pointer"
            onClick={() => {
              const searchedRestaurants = ListOfRestaurant.filter(
                (restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(SearchText.toLowerCase())
              );
              setSearchQuery(searchedRestaurants);
            }}
          >
            Search
          </button>
          <div className="top-rated">
            <button
              className="filter-btn w-52 h-10 border-2 rounded-xl text-lg font-bold hover:cursor-pointer"
              onClick={() => {
                const filteredList = ListOfRestaurant.filter(
                  (restaurant) => restaurant.info.avgRating >= 4.4
                );
                setSearchQuery(filteredList);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
        </div>
      </div>
      <div className="restaurant-container flex flex-wrap justify-center">
        {SearchQuery.map((restaurant) => (
            <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} className="link-style">
                <RestaurantCard resData={restaurant}/>
            </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
