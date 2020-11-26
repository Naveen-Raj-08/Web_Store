import React from "react";
import MaterialIcon from "material-icons-react";
import { connect, useDispatch } from "react-redux";
import { addToCart } from "../Actions/Action";

export const Card = (props) => {
  let Item = props.Values;

  const handleAddToCart = (e) => {
    e.preventDefault();
    props.ItemToCart(props.Values.title);
    console.log(props.ItemToCart(props.Values.title));
  };

  useDispatch(addToCart(props));
  return (
    <div className="card">
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
        <p className="card-text">${Item.price}</p>
        <button onClick={handleAddToCart} className="btn">
          Add To Cart
        </button>
      </div>
    </div>
  );
};
