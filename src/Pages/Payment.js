import React, { useState, useEffect } from "react";
import Header from "../Header";
import "./Payment.css";
import { Link, useNavigate } from "react-router-dom";
import CheckoutProduct from "../CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketValue } from "../reducer";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";
import { onAuthStateChanged } from "firebase/auth";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

const Payment = () => {
  //   const [paymnetEmail, setPaymentEmail] = useState("");
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const [{ basket, user }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState();
  const [clientSecret, setClientSecret] = useState();

  //   onAuthStateChanged(auth, (currentUser) => {
  //     setPaymentEmail(currentUser);
  //   });

  const handleSubmit = (e) => {
    e.preventdefault();
    setProcessing(true);

    const payload = stripe
      .confirmCardPayment({
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then((paymentIntent) => {
        // payementIntent = payment confirmation

        setError(null);
        setSucceeded(true);
        setProcessing(false);

        navigate("/orders");
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  useEffect(() => {
    //  genrate secret for client
    const getSecret = async () => {
      const response = await axios({
        methode: "POST",
        url: `/payment/create?total=${getBasketValue(basket)}*100`,
      });

      setClientSecret(response.data.clientSecret);
    };

    getSecret();
  }, []);
  return (
    <>
      <Header />
      <div className="payment">
        <div className="payment_container">
          <h1>
            Checkout(
            <Link to="/checkout">{basket?.length} items</Link>)
          </h1>
          {/* payment section - dilvery address */}
          <div className="payment_section">
            <div className="payment_title">
              <h3>Payement Address</h3>
            </div>
            <div className="payment_address">
              <p>{user?.email}</p>
              <p>123 react road</p>
              <p>Raipur CT</p>
            </div>
          </div>

          {/* payment section - product preview */}
          <div className="payment_section">
            <div className="payment_title">
              <h3>Review items and delivery</h3>
            </div>
            <div className="payment_items">
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
          </div>

          {/* payment section - product method */}
          <div className="payment_section">
            <div className="payment_title">
              <h3>Payment Method</h3>
            </div>

            <div className="payment_details">
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />

                <div className="payment_priceContainer">
                  <CurrencyFormat
                    renderText={(value) => <h3>Order Total : {value}</h3>}
                    displayType={"text"}
                    decimalScale={2}
                    value={getBasketValue(basket)}
                    prefix={"$"}
                    thousandSeparator={true}
                  />
                  <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>processing</p> : "Buy Now"}</span>
                  </button>
                </div>

                {/* Error */}
                {error && <div>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
