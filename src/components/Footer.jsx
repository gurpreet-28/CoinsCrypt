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
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-solid fa-envelope"></i>
      </div>
    </div>
  );
};

export default Footer;
