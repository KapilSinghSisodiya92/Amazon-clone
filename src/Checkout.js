import React, { useEffect } from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { Flipper, Flipped } from "react-flip-toolkit";

function Checkout() {
  const [{ basket }] = useStateValue();
  let icount = 0;
  useEffect(() => {}, [basket]);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout_ad"
          src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div className="checkout__left__empty">
            <h2>Your Shopping Basket is empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              "Add to basket" next to the item{" "}
            </p>
            <img
              src="https://realvastra.com/uploads/shopping-cart.png"
              alt=""
            />
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            <Flipper
              flipKey={basket.reduce(
                (inc, item) => inc + item.id.toString(),
                ""
              )}
            >
              {basket.map((item, index) => (
                <Flipped key={item.id} flipId={item.id}>
                  <div style={{ width: "100%" }}>
                    <CheckoutProduct
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                    />
                  </div>
                </Flipped>
              ))}
            </Flipper>
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
