import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CoinPage from "./pages/CoinPage";
import HomePage from "./pages/HomePage";
import News from "./pages/News";
import Cryptocurrencies from "./pages/Cryptocurrencies";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/coins" element={<Cryptocurrencies />} exact />
          <Route path="/coins/:id" element={<CoinPage />} exact />
          <Route path="/news" element={<News />} exact />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
