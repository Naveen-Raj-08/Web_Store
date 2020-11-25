import React from "react";
import MaterialIcon from "material-icons-react";

import { Link } from "react-router-dom";
import { ScrollBar } from "./ScrollBar";
import { HumbergerMenu } from "./HumbergerMenu";

export const NavigationBar = (props) => {
  return (
    <div>
      <header className="NavBar">
        <ScrollBar />
        <div className="logo">
          <Link to="/">
            <h3>Web Store</h3>
          </Link>
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
            <li>
              <HumbergerMenu />
            </li>
            <li>
              <form>
                <MaterialIcon icon="search" size={"tiny"} color="white" />
                <input type="search" placeholder="Type Something" />
              </form>
            </li>
          </ul>
          <div className="cart">
            <Link to="/Cart">
              <MaterialIcon
                icon="shopping_cart"
                color="rgb(278, 278, 278)"
                size="medium"
              />
              <span className="badge badge-danger ">{props.Value}</span>
            </Link>
            <br />
          </div>
        </nav>
      </header>
    </div>
  );
};
