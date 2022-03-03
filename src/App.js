import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Parent from "./Parent";
import Checkout from "./Checkout";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./StateProvider";
import Payment from "./Pages/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51KAsn9SIYZk8GRMNfuSeLFVw59Q2hZ3auyQzQ7VjBpdhaE6tKOhCJ9kxBCEItq4ZfeSDzByrx4p90BeqQyUVvZjv00fOxqwu82"
);

const App = () => {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // then set user
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // set
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Parent />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route
          exact
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }
        />
        <Route exact path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
};

export default App;
