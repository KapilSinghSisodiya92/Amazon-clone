import React from "react";
import LocationIcon from "@material-ui/icons/Room";
import { Link } from "react-router-dom";
import "./SubHeader.css";

function SubHeader() {
  return (
    <div className="subHeader">
      <div className="subHeader__left">
        <LocationIcon />
        <div className="subHeader__left__option">
          <span className="subHeader__left__optionLineOne">Hello</span>
          <span className="subHeader__left__optionLineTwo">
            Select your address
          </span>
        </div>
      </div>
      <div className="subHeader__center">
        <Link to="/">
          <span>Mobiles</span>
        </Link>
        <Link to="/">
          <span>Best Sellers</span>
        </Link>
        <Link to="/">
          <span>Today's Deals</span>
        </Link>
        <Link to="/">
          <span>Prime</span>
        </Link>
        <Link to="/">
          <span>Computers</span>
        </Link>
        <Link to="/">
          <span>Pantry</span>
        </Link>
        <Link to="/">
          <span>Electronics</span>
        </Link>
        <Link to="/">
          <span>Books</span>
        </Link>
        <Link to="/">
          <span>New Realease</span>
        </Link>
        <Link to="/">
          <span>Gift Ideas</span>
        </Link>
        <Link to="/">
          <span>Fashion</span>
        </Link>
      </div>
      <div className="subHeader__right">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/MAI/Sweepstakes/June20/SWM_DownloadApp._CB410314483_.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default SubHeader;
