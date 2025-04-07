import { Image_URL_PREFIX } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {info} = resData;
    const {name, avgRating, cuisines, costForTwo, sla, cloudinaryImageId} = info;
    const {slaString} = sla;

    return(
        <div className="restaurant-card">
            <img className="food-img" src={Image_URL_PREFIX + cloudinaryImageId} alt="food-img" />
            <div className="name-rating">
                <h2>{name}</h2>
                <h4>{avgRating} ★</h4>
            </div>
            <div className="category-price">
                <h5>{cuisines.slice(0, 2).join(", ")}</h5>
                <h4>{costForTwo}</h4>
            </div>
            <h4 className="delivery-time">🕓 {slaString}</h4>

        </div>
    );
};
export default RestaurantCard;