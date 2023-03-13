import React from "react";
import loader from "./loading.gif";

const Spinner = () => {
  return (
    <div
      className="mt-5 p-5"
      style={{
        height: "75vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={loader} alt="loading" />
    </div>
  );
};

export default Spinner;
