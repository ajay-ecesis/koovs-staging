import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScollToTop";
// component lazy loading begins
const Home = React.lazy(() => import("./pages/Home"));
const ProductCart = React.lazy(() => import("./pages/ProductCart"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));

class App extends React.Component {
  render() {
    return (
      <>

        <div className="App">
          <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={<> </>}>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/cart" element={<ProductCart />} />
                <Route path="/product/:title/:productId/:lineId" element={<ProductDetail />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </div>

      </>
    );
  }
}

export default App;
