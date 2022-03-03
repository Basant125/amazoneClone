import React, { useEffect, useState } from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Header from "./Header";

function Checkout() {
  const [currentEmail, setCurrentEmail] = useState("");
  const [{ basket, user }, dispatch] = useStateValue();

  onAuthStateChanged(auth, (currentUser) => {
    setCurrentEmail(currentUser);
  });

  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout_left">
          <img
            className="checkout_add"
            src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_NotApproved._TTW_.jpg"
            alt="amazone-add"
          />

          <div>
            <h3 className="checkout_userEmail">
              {currentEmail ? `Hello ${currentEmail?.email}` : ""}
            </h3>
            <h2 className="checkout_title">Your Shopping Basket</h2>
          </div>

          {basket.map((item) => {
            return (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            );
          })}
        </div>
        <div className="checkout_right">
          <Subtotal />
        </div>
      </div>
    </>
  );
}

export default Checkout;
