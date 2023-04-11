 import React from "react";
import "./Header.css";
import { MdShoppingBasket } from "react-icons/md";
import { MdStorefront } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import {Link} from "react-router-dom"

function Header() {
  return (
    <div className='header'>
    <Link to="/" style={{textDecoration:"none"}}>

      <div className="header_logo">
        <MdStorefront  className="header_logoImage" fontSize="large"/>
        <h2 className="header_logoTitle">Heni Shop</h2>
    </div>
    </Link>

    <div className="header_search">
      <input type="text" className="header_searchInput"/>
      <BsSearch className="header_searchIcon"/>
    </div>
    
    <div className="header_nav">
    <Link to="/checkout" style={{textDecoration:"none"}}>
    <div className="nav_item">
      <span className="nav_itemLineOne">Hello Guest</span>
      <span className="nav_itemLineTow">Sign In</span>
    </div>
    </Link>

    <div className="nav_item">
    <span className="nav_itemLineOne">Your</span>
      <span className="nav_itemLineTow">Shop</span>
    </div>

    <Link to="/checkout" style={{ textDecoration: "none" }}>
    <div className="nav_item">
      <MdShoppingBasket className="nav_basketIcon"/>
      <span className="nav_itemLineTow nav__basketCount">0</span>
    </div>
    </Link>
    </div>
    </div>
  );
}

export default Header

    