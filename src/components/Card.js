import React from "react";
import MaterialIcon from "material-icons-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Actions/Action";
import { Link } from "react-router-dom";

export const Card = (props) => {
  let Item = props.Values;

  const handleAddToCart = (e) => {
    e.preventDefault();
    props.ItemToCart(props.Values.title);
    console.log(props.ItemToCart(props.Values.title));
  };
  return (
    <div className="card product-card">
      <img
        className="card-img-top"
        src={Item.image}
        width="200"
        height="300"
        alt="items"
      />
      <div className="card-body details">
        <h4 className="card-title">{Item.title}</h4>
        <span>
          <MaterialIcon icon="star_rate" size="tiny" />
          <MaterialIcon icon="star_rate" size="tiny" />
          <MaterialIcon icon="star_half" size="tiny" />
          <MaterialIcon icon="star_border" size="tiny" />
        </span>
        <h6>{Item.size}</h6>
        <p className="card-text">${Item.price}.00</p>
        <button onClick={handleAddToCart} className="btn">
          Add To Cart
        </button>
      </div>
    </div>
  );
};
