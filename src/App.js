import "./App.css";
import React from "react";
import Home from "./pages/Home";
import ProductCart from "./pages/ProductCart";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="cart" element={<ProductCart />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
