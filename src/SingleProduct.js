import React from "react";
import "./SingleProduct.css";
import { Link } from "react-router-dom";

function SingleProduct({ title }) {
  return (
    <div className="singleProduct">
      <h3>{title}</h3>
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Ebooks/202007/pc_high._SY608_CB409836418_.jpg"
        alt=""
      />
      <Link to="/">See more</Link>
    </div>
  );
}

export default SingleProduct;
