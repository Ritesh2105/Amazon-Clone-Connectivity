import React from "react";
import "../assets/styles/Checkout.css";

function Checkout() {

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src={require(`../assets/amazon_checkout.jpg`).default}
          alt=""
        />

        <div>
          <h3>Hello User</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
