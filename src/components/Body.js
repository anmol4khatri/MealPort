import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return(
        <div className="body">
            <div className="search"></div>
            <div className="restaurant-container">
                {/* <RestaurantCard resData={resList[1]}/>
                <RestaurantCard resData={resList[2]}/>
                <RestaurantCard resData={resList[3]}/>
                <RestaurantCard resData={resList[4]}/>
                insted of this we can use array method map */}
                {resList.map( (restaurant) => (
                    <RestaurantCard key={restaurant.info.resId} resData={restaurant}/>
                ))};
            </div>
        </div>
    );
};
export default Body;