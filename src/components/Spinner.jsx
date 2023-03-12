import React from "react";
import loader from "./loading.gif";

const Spinner = () => {
  return (
    <div className="text-center mt-5 p-5">
      <img src={loader} alt="loading" />
    </div>
  );
};

export default Spinner;
