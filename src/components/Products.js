import React, { useEffect } from "react";
import MaterialIcon from "material-icons-react";

import { Link } from "react-router-dom";
import { Header } from "./Header";
import { NavigationBar } from "./NavigationBar";
import { Footer } from "./Footer";
import Product from "../images/Champagne.png";
import { ProductTab } from "./Tabs";
import { ProductCarousel } from "./ProductCarousel";

const HR = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 0.2,
    }}
  />
);
export const Products = () => {
  return (
    <div>
      <div>
        <Header />
        <NavigationBar />
        <div className="container">
          <div className="product-item">
            <div className="product-image">
              <img src={Product} alt="Items" />
            </div>
            <div className="item-details">
              <div>
                <h4>Champagne</h4>
              </div>
              <div className="product_details">
                <span>
                  <MaterialIcon icon="star_rate" size="small" />
                  <MaterialIcon icon="star_rate" size="small" />
                  <MaterialIcon icon="star_half" size="small" />
                  <MaterialIcon icon="star_border" size="small" />
                </span>
                <br />
                <a id="Rating" href="#">
                  4.5 out of 5.0 review
                </a>
                <div>
                  <input type="radio" name="size" />
                  <label htmlFor="size">
                    750.0ml bottle - <strong>from $300.49</strong>
                  </label>
                </div>
                <HR color="lightgray" />
                <div>
                  <input type="radio" name="size" />
                  <label htmlFor="size">
                    300.0ml bottle - <strong>from $100.49</strong>
                  </label>
                </div>
                <HR color="lightgray" />
                <div>
                  <input type="radio" name="size" />
                  <label htmlFor="size">
                    500.0ml bottle - <strong>from $250.49</strong>
                  </label>
                </div>
                <Link to="/Booking" className="btn">
                  Add To Cart
                </Link>
              </div>
            </div>
          </div>
          <HR color="lightgray" />
          <ProductCarousel />
          <ProductTab />
        </div>
        <Footer />
      </div>
    </div>
  );
};
