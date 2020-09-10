import React from "react";
import "./Deals.css";
import DealCard from "./DealCard";
import { Link } from "react-router-dom";

function TopTrand() {
  return (
    <div className="deals">
      <div className="deal__data">
        <div className="deal__title">
          <h3>Top tranding products in fashion</h3>
        </div>
        <div className="deal__data_card">
          <DealCard image="https://images-eu.ssl-images-amazon.com/images/I/71vxNfYwguL._AC_SY400_.jpg" />
          <DealCard image="https://images-eu.ssl-images-amazon.com/images/I/714MZ+7Sz-L._AC_SY400_.jpg" />
          <DealCard image="https://images-eu.ssl-images-amazon.com/images/I/91KzrwwOzKL._AC_SY400_.jpg" />
          <DealCard image="https://images-eu.ssl-images-amazon.com/images/I/61ZEjs1HfWL._AC_SY400_.jpg" />
          <DealCard image="https://images-eu.ssl-images-amazon.com/images/I/81iAG88-iEL._AC_SY400_.jpg" />
          <DealCard image="https://images-eu.ssl-images-amazon.com/images/I/71k5RlVaXcL._AC_SY400_.jpg" />
          <DealCard image="https://images-eu.ssl-images-amazon.com/images/I/91wUNiBC5IL._AC_SY400_.jpg" />
          <DealCard image="https://images-eu.ssl-images-amazon.com/images/I/91qiVT4UT+L._AC_SY400_.jpg" />
          <DealCard image="https://images-eu.ssl-images-amazon.com/images/I/51PGwqAylfL._AC_SY400_.jpg" />
          <DealCard image="https://images-eu.ssl-images-amazon.com/images/I/71CJdGEVcgL._AC_SY400_.jpg" />
        </div>
      </div>
    </div>
  );
}

export default TopTrand;
