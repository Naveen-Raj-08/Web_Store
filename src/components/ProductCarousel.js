import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import MaterialIcon from "material-icons-react";
import { Link } from "react-router-dom";

import Item1 from "../images/Item1.jpg";
import Item2 from "../images/Item2.jpg";
import Item3 from "../images/Item3.jpg";
import Item4 from "../images/Item4.jpg";
import Item5 from "../images/Item5.jpg";
import Item6 from "../images/Item6.jpg";

const Responsive = {
  0: { items: 1 },
  600: { items: 3 },
  1000: { items: 4 },
};

export const ProductCarousel = () => {
  return (
    <div>
      <AliceCarousel
        infinite
        mouseTracking
        responsive={Responsive}
        touchTracking={true}
        touchMoveDefaultEvents={false}
        paddingLeft="10"
        paddingRight="10"
        disableButtonsControls={true}
        autoPlay={true}
        autoPlayInterval="1500"
      >
        <div className="item-card">
          <img src={Item1} alt="product-items" />
          <div className="item-details">
            <h6>Korbel</h6>
            <span>
              <MaterialIcon icon="star_rate" size={"tiny"} />
              <MaterialIcon icon="star_rate" size={"tiny"} />
              <MaterialIcon icon="star_half" size={"tiny"} />
              <MaterialIcon icon="star_border" size={"tiny"} />
            </span>
            <h5 className="price">$100.00</h5>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
        <div className="item-card">
          <img src={Item2} alt="product-items" />
          <div className="item-details">
            <h6>Korbel</h6>
            <span>
              <MaterialIcon icon="star_rate" size={"tiny"} />
              <MaterialIcon icon="star_rate" size={"tiny"} />
              <MaterialIcon icon="star_half" size={"tiny"} />
              <MaterialIcon icon="star_border" size={"tiny"} />
            </span>
            <h5 className="price">$100.00</h5>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
        <div className="item-card">
          <img src={Item3} alt="product-items" />
          <div className="item-details">
            <h6>Korbel</h6>
            <span>
              <MaterialIcon icon="star_rate" size={"tiny"} />
              <MaterialIcon icon="star_rate" size={"tiny"} />
              <MaterialIcon icon="star_half" size={"tiny"} />
              <MaterialIcon icon="star_border" size={"tiny"} />
            </span>
            <h5 className="price">$100.00</h5>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
        <div className="item-card">
          <img src={Item4} alt="product-items" />
          <div className="item-details">
            <h6>Korbel</h6>
            <span>
              <MaterialIcon icon="star_rate" size={"tiny"} />
              <MaterialIcon icon="star_rate" size={"tiny"} />
              <MaterialIcon icon="star_half" size={"tiny"} />
              <MaterialIcon icon="star_border" size={"tiny"} />
            </span>
            <h5 className="price">$100.00</h5>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
        <div className="item-card">
          <img src={Item5} alt="product-items" />
          <div className="item-details">
            <h6>Korbel</h6>
            <span>
              <MaterialIcon icon="star_rate" size={"tiny"} />
              <MaterialIcon icon="star_rate" size={"tiny"} />
              <MaterialIcon icon="star_half" size={"tiny"} />
              <MaterialIcon icon="star_border" size={"tiny"} />
            </span>
            <h5 className="price">$100.00</h5>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
        <div className="item-card">
          <img src={Item6} alt="product-items" />
          <div className="item-details">
            <h6>Korbel</h6>
            <span>
              <MaterialIcon icon="star_rate" size={"tiny"} />
              <MaterialIcon icon="star_rate" size={"tiny"} />
              <MaterialIcon icon="star_half" size={"tiny"} />
              <MaterialIcon icon="star_border" size={"tiny"} />
            </span>
            <h5 className="price">$100.00</h5>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
        <div className="item-card">
          <img src={Item1} alt="product-items" />
          <div className="item-details">
            <h6>Korbel</h6>
            <span>
              <MaterialIcon icon="star_rate" size={"tiny"} />
              <MaterialIcon icon="star_rate" size={"tiny"} />
              <MaterialIcon icon="star_half" size={"tiny"} />
              <MaterialIcon icon="star_border" size={"tiny"} />
            </span>
            <h5 className="price">$100.00</h5>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
        <div className="item-card">
          <img src={Item2} alt="product-items" />
          <div className="item-details">
            <h6>Korbel</h6>
            <span>
              <MaterialIcon icon="star_rate" size={"tiny"} />
              <MaterialIcon icon="star_rate" size={"tiny"} />
              <MaterialIcon icon="star_half" size={"tiny"} />
              <MaterialIcon icon="star_border" size={"tiny"} />
            </span>
            <h5 className="price">$100.00</h5>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
        <div className="item-card">
          <img src={Item3} alt="product-items" />
          <div className="item-details">
            <h6>Korbel</h6>
            <span>
              <MaterialIcon icon="star_rate" size={"tiny"} />
              <MaterialIcon icon="star_rate" size={"tiny"} />
              <MaterialIcon icon="star_half" size={"tiny"} />
              <MaterialIcon icon="star_border" size={"tiny"} />
            </span>
            <h5 className="price">$100.00</h5>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
        <div className="item-card">
          <img src={Item4} alt="product-items" />
          <div className="item-details">
            <h6>Korbel</h6>
            <span>
              <MaterialIcon icon="star_rate" size={"tiny"} />
              <MaterialIcon icon="star_rate" size={"tiny"} />
              <MaterialIcon icon="star_half" size={"tiny"} />
              <MaterialIcon icon="star_border" size={"tiny"} />
            </span>
            <h5 className="price">$100.00</h5>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
      </AliceCarousel>
    </div>
  );
};
