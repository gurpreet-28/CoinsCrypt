import React from "react";
import NumbersContext from "./NumbersContext";

const NumbersState = (props) => {
  const numberWithCommas = (x) => {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const convertToInternationalCurrencySystem = (labelValue) => {
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e9
      ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + " B"
      : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
      ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + " M"
      : // Three Zeroes for Thousands
      Math.abs(Number(labelValue)) >= 1.0e3
      ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + " K"
      : Math.abs(Number(labelValue)).toFixed(2);
  };

  return (
    <NumbersContext.Provider
      value={{ numberWithCommas, convertToInternationalCurrencySystem }}
    >
      {props.children}
    </NumbersContext.Provider>
  );
};

export default NumbersState;
