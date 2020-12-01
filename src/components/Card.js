import React, { Component } from "react";
import MaterialIcon from "material-icons-react";
import { connect, useDispatch } from "react-redux";
import { addToCart } from "../Actions/Action";
import { Link } from "react-router-dom";

class Card extends Component {
  handleAddToCart = (e) => {
    e.preventDefault();
    this.props.ItemToCart(this.props.Values);
  };
  render() {
    let Item = this.props.Values;
    return (
      <div className="product-card">
        <img className="card-img-top" src={Item.image} alt="items" />
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
          <button onClick={this.handleAddToCart} className="btn">
            Add To Cart
          </button>
        </div>
      </div>
    );
  }
}
export default Card;
