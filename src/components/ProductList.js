import React from "react";
import { connect } from "react-redux";
import { Products } from "./Products";
import Ad from "../images/Advertisement2.jpg";
import { Link } from "react-router-dom";

const ProductList = (props) => {
  return (
    <div className="container">
      <div className="heading">
        <h1>Our Favorites</h1>
      </div>
      <div className="Product-list">
        {props.Products.map((product) => (
          <Products product={product} key={product.id} />
        ))}
      </div>
      <div className="ads">
        <img src={Ad} alt="advertisement" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    Products: state.productState.products,
  };
};

export default connect(mapStateToProps)(ProductList);
