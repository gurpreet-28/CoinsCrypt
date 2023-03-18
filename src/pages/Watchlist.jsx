import React from "react";

const Watchlist = () => {
  let wishlist = JSON.parse(localStorage.getItem("wishlist"));
  return (
    <div>
      {wishlist.map((coin) => {
        return <h1>{coin}</h1>;
      })}
    </div>
  );
};

export default Watchlist;
