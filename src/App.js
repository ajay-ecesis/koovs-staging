import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./pages/Test";
// component lazy loading begins
const Home = React.lazy(() => import("./pages/Home"));
const ProductCart = React.lazy(() => import("./pages/ProductCart"));

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Suspense fallback={<> </>}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/cart" element={<ProductCart />} />
              <Route path="/product/:title/:productId/:lineId" element={<Test />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
