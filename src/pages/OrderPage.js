import React from "react";
import AccountSideNav from "../components/AccountSideNav/AccountSideNav";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import OrderCommon from "../components/OrdersList/OrderCommon";
const OrderPage = () => {
  return (
    <>
      <Header />
      <AccountSideNav index={2}>
        <OrderCommon />
      </AccountSideNav>
      <Footer />
    </>
  );
};

export default OrderPage;
