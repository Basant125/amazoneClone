import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketValue } from "./reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  const Navigate = useNavigate();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              subtotal ({basket?.length} items) : <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              this order contain a gift
            </small>
          </>
        )}
        displayType={"text"}
        decimalScale={2}
        value={getBasketValue(basket)}
        prefix={"$"}
        thousandSeparator={true}
      />
      <button onClick={(e) => Navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
