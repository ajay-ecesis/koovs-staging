import "./App.css";
import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScollToTop";
import { getVisitorToken } from "./api/auth";
import { checkUserToken } from "./api/auth";
import { useDispatch, useSelector } from "react-redux";
import Login from "./pages/Login";
import { getCartItems } from "./api/cart";
import CategoryMainPage from "./pages/CategoryMainPage";
import Search from "./pages/Search";
import { Toaster } from "react-hot-toast";
import MyAccount from "./components/MyAccount/MyAccount";
import { MyInformationPage } from "./pages/MyInformationPage";
// component lazy loading begins
const Home = React.lazy(() => import("./pages/Home"));
const ProductCart = React.lazy(() => import("./pages/ProductCart"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const HomePageWomen = React.lazy(() => {
  import("./pages/HomePageWomen");
});
const CategoryPage = React.lazy(() => import("./pages/CategoryPage"));
const FourNotFour = React.lazy(() => import("./pages/404"));
const Signup = React.lazy(() => import("./pages/Signup"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    checkIfTokenExists();
    loadCartItems();
  }, []);

  // checking for authentication tokens
  const checkIfTokenExists = async () => {
    let token = JSON.parse(localStorage.getItem("guestToken"));
    if (!token) {
      let token = await getVisitorToken();
      localStorage.setItem("guestToken", JSON.stringify(token));
    } else {
      // check if user is signed in
      if (JSON.parse(localStorage.getItem("userToken"))) {
        let userExists = await checkUserToken();
        if (userExists) {
          dispatch({
            type: "USER_LOGIN",
            payload: userExists,
          });
        }
      }
    }
  };

  const loadCartItems = async () => {
    let result = await getCartItems();
    if (result) {
      dispatch({
        type: "INITIALIZE_CART",
        payload: result.itemCount,
      });
    }
  };

  return (
    <>
      <div className="App">
        <Toaster position="top-center" reverseOrder={false} />

        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<> </>}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/cart" element={<ProductCart />} />
              <Route
                path="/product/:title/:productId/:lineId"
                element={<ProductDetail />}
              />
              <Route path="/:category/tags/:tag" element={<CategoryPage />} />

              <Route path="/category/:category" element={<CategoryPage />} />

              <Route
                path="/category/:category/:subcategory"
                element={<CategoryMainPage />} 
              />
              <Route path="/signup/register" element={<Signup />} />
              <Route path="/signup/login" element={<Login />} />
              <Route path="/search" element={<Search />} />

              {/* <Route path="/categoryMain" element={<CategoryMainPage />} /> */}
              <Route path="/user/account" element={<MyInformationPage />} />
              <Route path="*" element={<FourNotFour />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
