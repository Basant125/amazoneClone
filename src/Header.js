import React, { useState } from "react";
import "./Header.css";
import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
function Header() {
  const [currentEmail, setCurrentEmail] = useState("");
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  onAuthStateChanged(auth, (currentUser) => {
    setCurrentEmail(currentUser);
  });

  return (
    <div className="header">
      {/*logo */}
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>

      {/* input */}
      <div className="header_search">
        <input type="text" name="" id="" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      {/* nav link */}
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">
              {currentEmail ? `${currentEmail?.email}` : "Hello Guest"}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
      </div>

      <Link to="/checkout">
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_optionLineTwo header_basketCount">
            {basket?.length}{" "}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
