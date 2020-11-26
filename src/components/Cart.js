import React from "react";
import { connect, useSelector } from "react-redux";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { NavigationBar } from "./NavigationBar";

const Cart = (props) => {
  console.log(props.cart);
  return (
    <div>
      <Header />
      <NavigationBar />
      <div className="container">
        <h2>Hello Welcome</h2>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cartState.ProductCart,
  };
};

export default connect(mapStateToProps)(Cart);
