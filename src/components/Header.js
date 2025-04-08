import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

    const [BtnName, setBtnName] = useState("Login");

    return (
      <div className="header">
        <div className="logo-container">
          <img src={LOGO_URL} alt="logo" />
        </div>
        <div className="nav-container">
          <ul>
            <li>Home</li>
            <li>Contact</li>
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