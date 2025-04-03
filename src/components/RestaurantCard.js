import resList from "../utils/mockData";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {info, order} = resData;
    const {image, name, rating, cuisine, cft} = info;
    const {url} = image;
    const {aggregate_rating} = rating;
    const {deliveryTime} = order;

    return(
        <div className="restaurant-card">
            <img className="food-img" src={url} alt="food-img" />
            <div className="name-rating">
                <h2>{name}</h2>
                <h5>{aggregate_rating}</h5>
            </div>
            <div className="category-price">
                <h5>{cuisine[0].name}</h5>
                <h5>{cft.text}</h5>
            </div>
            <h5 className="delivery-time">{deliveryTime}</h5>

        </div>
    );
};
export default RestaurantCard;