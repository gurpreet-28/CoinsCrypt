import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h2>CoinsCrypt</h2>
        <p>All rights reserved</p>
      </div>
      <div className="social-icons">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-solid fa-envelope"></i>
      </div>
    </div>
  );
};

export default Footer;
