import React from "react";
import MaterialIcon from "material-icons-react";
import { Link } from "react-router-dom";

const HR = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 0.2,
    }}
  />
);
export const Products = (props) => {
  let Product = props.product;
  return (
    <div>
      <div className="Content">
        <div className="Product">
          <div className="Product-inner">
            <div className="Product-front">
              <img src={Product.image} alt={Product.alt} />
            </div>
            <div className="Product-back">
              <h1>{Product.title}</h1>
              <p>{Product.description}</p>
              <span>
                <MaterialIcon icon="star_rate" size="small" />
                <MaterialIcon icon="star_rate" size="small" />
                <MaterialIcon icon="star_half" size="small" />
                <MaterialIcon icon="star_border" size="small" />
              </span>
              <h3>${Product.price}</h3>
              <Link to="/Shop-Product" className="btn">
                Go for Shop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
