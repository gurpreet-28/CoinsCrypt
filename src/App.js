import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CoinPage from "./pages/CoinPage";
import HomePage from "./pages/HomePage";
import Cryptocurrencies from "./pages/Cryptocurrencies";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/coins" element={<Cryptocurrencies />} exact />
          <Route path="/coins/:id" element={<CoinPage />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
