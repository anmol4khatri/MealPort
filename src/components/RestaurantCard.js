import { Image_URL_PREFIX } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {info} = resData;
    const {name, avgRating, cuisines, costForTwo, sla, cloudinaryImageId} = info;
    const {slaString} = sla;

    return(
        <div className="restaurant-card w-96 p-2.5 m-3.5 hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.15)] rounded-2xl cursor-pointer">
            <img className="food-img w-md h-64 rounded-2xl object-cover" src={Image_URL_PREFIX + cloudinaryImageId} alt="food-img" />
            <div className="name-rating flex justify-between">
                <h2 className="mt-1.5 text-xl font-bold">{name}</h2>
                <h4 className="mt-1.5">{avgRating} ★</h4>
            </div>
            <div className="category-price flex justify-between">
                <h5 className="text-lg">{cuisines.slice(0, 2).join(", ")}</h5>
                <h4>{costForTwo}</h4>
            </div>
            <h4 className="delivery-time mt-1.5 font-bold">🕓 {slaString}</h4>
        </div>
    );
};
export default RestaurantCard;