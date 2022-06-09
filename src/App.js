import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const Home = React.lazy(() => import("./pages/Home"));
const ProductCart = React.lazy(() => import("./pages/ProductCart"));

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
