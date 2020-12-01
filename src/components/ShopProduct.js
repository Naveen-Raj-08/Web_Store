import React from "react";
import { connect } from "react-redux";

import { Header } from "./Header";
import { Footer } from "./Footer";
import NavigationBar from "./NavigationBar";
import Ad from "../images/Advertisement.jpg";
import ProductData from "./Data";
import Card from "./Card";
import { addToCart } from "../Actions/Action";
import { ProductCarousel } from "./ProductCarousel";
import Cart from "./Cart";

const ShopProduct = (props) => {
  let Data = ProductData.Items;
  const addToCart = (Data) => {
    props.AddToCart(Data);
  };

  return (
    <div>
      <Header />
      <NavigationBar />
      <div className="container">
        <div className="heading">
          <h2>Product List</h2>
        </div>
        <div className="Items">
          {Data.map((item) => (
            <Card Values={item} key={item.id} ItemToCart={addToCart} />
          ))}
        </div>

        <div className="ads">
          <img src={Ad} alt="Advertisement" />
        </div>
        <div className="new-items">
          <div className="heading">
            <h2>New Arrivals</h2>
          </div>
          <ProductCarousel />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.productState.products,
    cart: state.cartState.ProductCart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    AddToCart: (product) => {
      dispatch(addToCart(product));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShopProduct);
