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
                <h4>{aggregate_rating} ★</h4>
            </div>
            <div className="category-price">
                <h5>{cuisine[0].name}</h5>
                <h4>{cft.text}</h4>
            </div>
            <h4 className="delivery-time">🕓 {deliveryTime}</h4>

        </div>
    );
};
export default RestaurantCard;