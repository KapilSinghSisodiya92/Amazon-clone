import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispath] = useStateValue();

  const addToBasket = () => {
    //Add item to basket
    dispath({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
