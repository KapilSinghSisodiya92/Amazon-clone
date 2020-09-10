import React from "react";
import "./Deals.css";
import DealCard from "./DealCard";
import { Link } from "react-router-dom";

function Deals() {
  return (
    <div className="deals">
      <div className="deal__data">
        <div className="deal__title">
          <h3>Today's Deal</h3>
          <Link to="/">See all deals</Link>
        </div>
        <div className="deal__data_card">
          <DealCard
            image="https://m.media-amazon.com/images/I/41OC20VDxUL.__AC_SY400_.jpg"
            minPrice={120.0}
            maxPrice={399.0}
          />
          <DealCard
            image="https://m.media-amazon.com/images/I/41w+vjpVrlL.__AC_SY400_.jpg"
            minPrice={499.0}
            maxPrice={899.0}
          />
          <DealCard
            image="https://m.media-amazon.com/images/I/41VloMir72L.__AC_SY400_.jpg"
            minPrice={99.0}
            maxPrice={199.0}
          />
          <DealCard
            image="https://m.media-amazon.com/images/I/41s3o8925TL.__AC_SY400_.jpg"
            minPrice={649.0}
            maxPrice={969.0}
          />
          <DealCard
            image="https://m.media-amazon.com/images/I/414EPGgsDzL.__AC_SY400_.jpg"
            minPrice={19.0}
            maxPrice={39.0}
          />
          <DealCard
            image="https://m.media-amazon.com/images/I/51YC+iZHW0L.__AC_SY400_.jpg"
            minPrice={52.0}
            maxPrice={69.0}
          />
          <DealCard
            image="https://m.media-amazon.com/images/I/41p9XLf1oqL.__AC_SY400_.jpg"
            minPrice={29.0}
            maxPrice={89.0}
          />
          <DealCard
            image="https://m.media-amazon.com/images/I/51NQ+50fuQL.__AC_SY400_.jpg"
            minPrice={60.0}
            maxPrice={90.0}
          />
          <DealCard
            image="https://m.media-amazon.com/images/I/41gDVcJtyjL.__AC_SY400_.jpg"
            minPrice={122.0}
            maxPrice={225.0}
          />
          <DealCard
            image="https://m.media-amazon.com/images/I/31r5+bXhl0L.__AC_SY400_.jpg"
            minPrice={499.0}
            maxPrice={700.0}
          />
        </div>
      </div>
    </div>
  );
}

export default Deals;
