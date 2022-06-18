import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScollToTop";
// component lazy loading begins
const Home = React.lazy(() => import("./pages/Home"));
const ProductCart = React.lazy(() => import("./pages/ProductCart"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const HomePageWomen=React.lazy(()=>{import('./pages/HomePageWomen')})
const CategoryPage=React.lazy(()=>import("./pages/CategoryPage"))
const FourNotFour=React.lazy(()=>import("./pages/404"))
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
                <Route path="/category/:category" element={<CategoryPage />} />
                <Route path="/category/:category/:subcategory" element={< p>Sub category</p>} />
                <Route path="*" element={<FourNotFour/>}/>
              </Routes>
            </Suspense>
          </BrowserRouter>
        </div>

      </>
    );
  }
}

export default App;
