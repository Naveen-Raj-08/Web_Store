import React from "react";
import { Link } from "react-router-dom";

export const HumbergerMenu = () => {
  return (
    <div className="menu-container">
      <input type="checkbox" className="toggler" />
      <div className="Humburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="menu">
        <div>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Product">Shop</Link>
              </li>
              <li>
                <Link to="/Cart">Cart</Link>
              </li>
              <li>
                <Link to="/Favorites">Favorites</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
