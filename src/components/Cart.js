import React from "react";
import { connect } from "react-redux";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { NavigationBar } from "./NavigationBar";

import MaterialIcon from "material-icons-react";
import { Link } from "react-router-dom";
import Image from "../images/Item4.jpg";

const Cart = () => {
  return (
    <div>
      <Header />
      <NavigationBar />
      <div className="container">
        <div className="shop">
          <Link to="/Shop-Product">
            <MaterialIcon icon="west" color={"rgb(80,80,80)"} size={"medium"} />
          </Link>
        </div>

        <div className="cart-details">
          <div className="product-image">
            <img src={Image} alt="Product" height="200" />
          </div>
          <div className="product-title">
            <h1>Korbel</h1>
          </div>
          <div className="product-price">
            <h4>$100.00</h4>
          </div>
          <div className="order">
            <button
              onClick={() => alert("Thanks, your Item will be Delivered soon!")}
            >
              Place a Order
            </button>
          </div>
          <div className="cancel">
            <button
              onClick={() =>
                alert("Your Item has Canceled, Please Go for Shop!")
              }
            >
              Cancel
            </button>
          </div>
        </div>
        <div className="total-price">
          <h4>Total Price: $100.00</h4>
        </div>
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
