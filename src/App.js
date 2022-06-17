import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScollToTop";
// component lazy loading begins
const Home = React.lazy(() => import("./pages/Home"));
const ProductCart = React.lazy(() => import("./pages/ProductCart"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const Login = React.lazy(() => import("./pages/Login"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Search = React.lazy(() => import("./pages/Search"));
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
                <Route path="/login" element={<Login />} />

                <Route path="/orders" element={<Orders />} />
                <Route
                  path="/product/:title/:productId/:lineId"
                  element={<ProductDetail />}
                />
                <Route path="/search" element={<Search />} />
                <Route
                  path="*"
                  element={< ><h2>No route found</h2></>}
                />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </div>
      </>
    );
  }
}

export default App;
