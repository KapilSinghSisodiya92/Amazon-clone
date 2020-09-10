import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <a href="#">
          <p>Back to top</p>
        </a>
      </div>
      <div className="footer_inside">
        <img
          alt="Amazon Logo White"
          src="https://www.nicepng.com/png/full/228-2281836_vault-logo-available-amazon-app-store.png"
          className="header__logo"
        />
        <button> English </button>
        <button> £ GBP - Pound sterling</button>
        <button> United Kingdom</button>
      </div>
    </div>
  );
}

export default Footer;
