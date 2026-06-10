import React from "react";
import "../../App.css";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cartItems } = useCart();
  return (
    <div className="app-container">
      <div className="navSection">
        <div className="title">
          <h1>
            <Link to="/">E-Cart</Link>
          </h1>
        </div>

        <div className="search-container">
          <input type="text" placeholder="Search..." />
        </div>

        <div className="user-detail">  <Link to="/login">SignIN/SignUp</Link></div>
       <div className="cart-icon">
          <Link to="/Cart">
            <span>🛒</span>
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </Link>
        </div>
      </div>
      <ul className="category-list">
        <li>
          <Link to="/Mobiles">Mobile</Link>
        </li>
        <li>
          <Link to="/Men">Men</Link>
        </li>
        <li>
          <Link to="/Woman">Women</Link>
        </li>
        <li>
          <Link to="/Watch">Watches</Link>
        </li>
        <li>
          <Link to="/Tv">TV</Link>
        </li>
        <li>
          <Link to="/Ac">AC</Link>
        </li>
        <li>
          <Link to="/Furniture">Furniture</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
