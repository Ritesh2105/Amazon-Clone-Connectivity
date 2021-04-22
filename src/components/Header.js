import React from "react";
import Select from 'react-select';
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import logo from "../assets/amazon_logo.png"
import "../assets/styles/Header.css";

function Header() {
  const categories = [
    { label: <a href="/categories/1001" style={{fontSize:"120%", marginLeft:"10px", textDecoration:"none"}}>Lightining Solutions</a>},
    { label: <a href="/categories/1002" style={{fontSize:"120%", marginLeft:"10px", textDecoration:"none"}}>Laptops</a>},
    { label: <a href="/categories/1003" style={{fontSize:"120%", marginLeft:"10px", textDecoration:"none"}}>Mobiles</a>},
    { label: <a href="/categories/1004" style={{fontSize:"120%", marginLeft:"10px", textDecoration:"none"}}>Accesories</a>},
    { label: <a href="/categories/1005" style={{fontSize:"120%", marginLeft:"10px", textDecoration:"none"}}>Fashion</a>},
    { label: <a href="/categories/1006" style={{fontSize:"120%", marginLeft:"10px", textDecoration:"none"}}>Mens Grooming</a>},
    { label: <a href="/categories/1007" style={{fontSize:"120%", marginLeft:"10px", textDecoration:"none"}}>Watches</a>}
  ];
    return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Amazon Logo"/>
      </Link>

      <div className="header__search">
      <div className="header__search1">
        <Select
        options={categories}
      />
      </div>
      </div>

      <div className="header__nav">
        <Link to={'/login'}>
          <div className="header__option">
            <span className="header__optionLineOne">Hello</span>
            <span className="header__optionLineTwo">user</span>
          </div>
        </Link>

        <Link to='/orders'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
