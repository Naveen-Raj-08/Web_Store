import React from "react";
import MaterialIcon from "material-icons-react";

import Image from "../images/Backardi.png";
import Image2 from "../images/heineken.png";
import Image3 from "../images/Wine.png";
import Image4 from "../images/Whisky.png";
import Image5 from "../images/Champagne.png";
import Image6 from "../images/JackDaniels.png";
import Ad from "../images/Advertisement.jpg";
import { Link } from "react-router-dom";

export const MainContent = () => {
  return (
    <>
      <div className="heading">
        <h1>Our Favorites</h1>
      </div>
      <div className="Content container">
        <div className="Product1">
          <div className="front">
            <img src={Image} alt="product" />
          </div>
          <div className="back">
            <div className="heading">
              <h4>Vodka</h4>
            </div>
            <div className="product_details">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <span>
                <MaterialIcon icon="star_rate" size="small" />
                <MaterialIcon icon="star_rate" size="small" />
                <MaterialIcon icon="star_half" size="small" />
                <MaterialIcon icon="star_border" size="small" />
              </span>
              <h5 className="price">$100.00</h5>
              <Link to="/Products" className="btn">
                Go for Shop
              </Link>
            </div>
          </div>
        </div>
        <div className="Product2">
          <div className="front">
            <img src={Image2} alt="product" />
          </div>
          <div className="back">
            <div className="heading">
              <h4>Beer</h4>
            </div>
            <div className="product_details">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <span>
                <MaterialIcon icon="star_rate" size="small" />
                <MaterialIcon icon="star_rate" size="small" />
                <MaterialIcon icon="star_half" size="small" />
                <MaterialIcon icon="star_border" size="small" />
              </span>
              <h5 className="price">$100.00</h5>
              <Link to="/Products" className="btn">
                Go for Shop
              </Link>
            </div>
          </div>
        </div>
        <div className="Product3">
          <div className="front">
            <img src={Image3} alt="product" />
          </div>
          <div className="back">
            <div className="heading">
              <h4>Wine</h4>
            </div>
            <div className="product_details">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <span>
                <MaterialIcon icon="star_rate" size="small" />
                <MaterialIcon icon="star_rate" size="small" />
                <MaterialIcon icon="star_half" size="small" />
                <MaterialIcon icon="star_border" size="small" />
              </span>
              <h5 className="price">$100.00</h5>
              <Link to="/Products" className="btn">
                Go for Shop
              </Link>
            </div>
          </div>
        </div>
        <div className="Product4">
          <div className="front">
            <img src={Image4} alt="product" />
          </div>
          <div className="back">
            <div className="heading">
              <h4>Whisky</h4>
            </div>
            <div className="product_details">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <span>
                <MaterialIcon icon="star_rate" size="small" />
                <MaterialIcon icon="star_rate" size="small" />
                <MaterialIcon icon="star_half" size="small" />
                <MaterialIcon icon="star_border" size="small" />
              </span>
              <h5 className="price">$100.00</h5>
              <Link to="/Products" className="btn">
                Go for Shop
              </Link>
            </div>
          </div>
        </div>
        <div className="Product5">
          <div className="front">
            <img src={Image5} alt="product" />
          </div>
          <div className="back">
            <div className="heading">
              <h4>Champagne</h4>
            </div>
            <div className="product_details">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <span>
                <MaterialIcon icon="star_rate" size="small" />
                <MaterialIcon icon="star_rate" size="small" />
                <MaterialIcon icon="star_half" size="small" />
                <MaterialIcon icon="star_border" size="small" />
              </span>
              <h5 className="price">$100.00</h5>
              <Link to="/Products" className="btn">
                Go for Shop
              </Link>
            </div>
          </div>
        </div>
        <div className="Product6">
          <div className="front">
            <img src={Image6} alt="product" />
          </div>
          <div className="back">
            <div className="heading">
              <h4>Rum</h4>
            </div>
            <div className="product_details">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <span>
                <MaterialIcon icon="star_rate" size="small" />
                <MaterialIcon icon="star_rate" size="small" />
                <MaterialIcon icon="star_half" size="small" />
                <MaterialIcon icon="star_border" size="small" />
              </span>
              <h5 className="price">$100.00</h5>
              <Link to="/Products" className="btn">
                Go for Shop
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="ads">
        <img src={Ad} alt="Advertisement" />
      </div>
    </>
  );
};
