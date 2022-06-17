import React from "react";
import AccountSideNav from "../components/AccountSideNav/AccountSideNav";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import OrdersList from "../components/OrdersList/OrdersList";

function Orders() {
    return (
        <>
            <Header />
            <AccountSideNav >

                <OrdersList />
            </AccountSideNav>
            <Footer />
        </>
    );
}

export default Orders;
