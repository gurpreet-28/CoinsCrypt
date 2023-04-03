import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CoinPage from "./pages/CoinPage";
import HomePage from "./pages/HomePage";
import News from "./pages/News";
import Cryptocurrencies from "./pages/Cryptocurrencies";
import Footer from "./components/Footer";
import Watchlist from "./pages/Watchlist";
import ScrollToTop from "./ScrollToTop";
import NumbersState from "./context/NumbersState";

function App() {
  return (
    <div className="App">
      <NumbersState>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/coins" element={<Cryptocurrencies />} exact />
            <Route path="/coin/:uuid" element={<CoinPage />} exact />
            <Route path="/watchlist" element={<Watchlist />} exact />
            <Route path="/news" element={<News />} exact />
          </Routes>
          <Footer />
        </BrowserRouter>
      </NumbersState>
    </div>
  );
}

export default App;
