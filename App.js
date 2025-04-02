import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://www.cdnlogo.com/logos/l/95/lorem-lorem.svg" alt="logo" />
            </div>
            <div className="nav-container">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

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

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
