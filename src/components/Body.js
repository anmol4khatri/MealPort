import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return(
        <div className="body">
            <div className="search"></div>
            <div className="restaurant-container">
                <RestaurantCard/>
            </div>
        </div>
    );
};
export default Body;