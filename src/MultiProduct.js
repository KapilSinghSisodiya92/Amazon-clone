import React from "react";
import "./MultiProduct.css";

function MultiProduct({
  title,
  image1,
  title1,
  image2,
  title2,
  image3,
  title3,
  image4,
  title4,
}) {
  return (
    <div className="multiProduct">
      <div className="multiProduct__title">
        <div className="multiProduct__header">
          <h3>{title}</h3>
        </div>
        <div className="multiProduct__Row1">
          <div className="multiProduct__Row__block">
            <img src={image1} alt="" />
            <span>
              <p>{title1}</p>
            </span>
          </div>
          <div className="multiProduct__Row__block">
            <img src={image2} alt="" />
            <span>
              <p>{title2}</p>
            </span>
          </div>
        </div>
        <div className="multiProduct__Row2">
          <div className="multiProduct__Row__block">
            <img src={image3} alt="" />
            <span>
              <p>{title3}</p>
            </span>
          </div>
          <div className="multiProduct__Row__block">
            <img src={image4} alt="" />
            <span>
              <p>{title4}</p>
            </span>
          </div>
        </div>
        <div className="multiProduct__footer">
          <a href="">See more</a>
        </div>
      </div>
    </div>
  );
}

export default MultiProduct;
