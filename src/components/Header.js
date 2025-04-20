import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [BtnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
      <div className="header flex justify-between mb-3 p-6 bg-amber-300">
        <div className="logo-container w-64">
          <img src={LOGO_URL} alt="logo" />
        </div>
        <div className="nav-container">
          <ul className="flex">
            <li className="m-3 text-xl">Online Status: {onlineStatus ? "✅" : "❌"} </li>
            <li className="m-3 text-xl"><Link to="/">Home</Link></li>
            <li className="m-3 text-xl"><Link to="/About">About</Link></li>
            <li className="m-3 text-xl"><Link to="/Contact">Contact</Link></li>
            <li className="m-3 text-xl">Cart</li>
            <button
              className="login-btn w-16 h-10 text-xl mr-5 ml-1 mt-1 hover:cursor-pointer"
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