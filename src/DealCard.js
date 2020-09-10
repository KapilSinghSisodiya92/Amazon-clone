import React from "react";
import "./DealCard.css";

function DealCard({ image, minPrice, maxPrice }) {
  return (
    <div className="deals__card">
      <div className="deals__top">
        <img src={image} alt="" />
      </div>
      <div className="deals__bottom">
        <p className="deals__bottom__price">
          <div className="deals__bottom__minprice">
            <small>{minPrice && "£"}</small>
            <strong>{minPrice}</strong>
          </div>
          <div className="deals__bottom__seperator">
            <span>{minPrice && maxPrice && " - "} </span>
          </div>
          <div className="deals__bottom__minprice">
            <small>{maxPrice && "£"}</small>
            <strong>{maxPrice}</strong>
          </div>
        </p>
      </div>
    </div>
  );
}

export default DealCard;
