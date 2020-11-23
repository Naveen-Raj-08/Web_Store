import React, { useEffect } from "react";
import MaterialIcon from "material-icons-react";

import { Link } from "react-router-dom";
import { ScrollBar } from "./ScrollBar";
import { HumbergerMenu } from "./HumbergerMenu";

export const NavigationBar = () => {
  return (
    <div>
      <header className="NavBar sticky-top">
        <ScrollBar />
        <div className="logo">
          <h3>Welcome</h3>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/#">Favorites</Link>
            </li>
            <li>
              <Link to="/#">Special</Link>
            </li>
          </ul>
          <div className="cart">
            <Link to="/Cart">
              <MaterialIcon icon="shopping_cart" color="white" size="medium" />
            </Link>
            <br />
            <HumbergerMenu />
          </div>
        </nav>
      </header>
    </div>
  );
};
