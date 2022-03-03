import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ title, price, rating, image, id }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //  disptach take two argument

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };

  return (
    <div className="product" key={id}>
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="product-img" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
