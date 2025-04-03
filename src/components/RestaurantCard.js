const RestaurantCard = () => {
    return(
        <div className="restaurant-card">
            <img className="food-img" src="https://b.zmtcdn.com/data/pictures/5/21097945/5994feb8093876968611bfd59eccb47d_o2_featured_v2.jpg" alt="food-img" />
            <div className="name-rating">
                <h2>Nothing Before Coffee</h2>
                <h5>4.1 Stars</h5>
            </div>
            <div className="category-price">
                <h5>Cafe, Coffee, Beverages</h5>
                <h5>Rs. 150 for one</h5>
            </div>
            <h5 className="delivery-time">38 Min</h5>
        </div>
    );
};
export default RestaurantCard;