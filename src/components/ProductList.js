import React from "react";
import { connect } from "react-redux";
import { Products } from "./Products";

const ProductList = (props) => {
  return (
    <div className="container">
      <div className="heading">
        <h1>Our Favorites</h1>
      </div>
      <div className="row">
        {props.Products.map((product) => (
          <Products product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    Products: state.productState.products,
    Cart: state.cartState.cart,
  };
};

export default connect(mapStateToProps)(ProductList);
