import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import crypto from "./crypto.png";

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              src={crypto}
              alt="Logo"
              width="36"
              class="d-inline-block align-text-top"
            ></img>{" "}
            CoinsCrypt
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/coins">
                  Cryptocurrencies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/watchlist">
                  Watchlist
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/news">
                  News
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
