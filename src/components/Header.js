import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {

    const [BtnName, setBtnName] = useState("Login");

    return (
      <div className="header">
        <div className="logo-container">
          <img src={LOGO_URL} alt="logo" />
        </div>
        <div className="nav-container">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li>Cart</li>
            <button
              className="login-btn"
              onClick={() => {
                BtnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {BtnName}
            </button>
          </ul>
        </div>
      </div>
    );
};

export default Header;