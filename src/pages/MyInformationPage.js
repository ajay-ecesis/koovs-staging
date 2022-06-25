import React from "react";
import AccountSideNav from "../components/AccountSideNav/AccountSideNav";
import Header from "../components/Header/Header";
import MyAccount from "../components/MyAccount/MyAccount";

export const MyInformationPage = () => {
  return (
    <>
      <Header />

      <AccountSideNav index={3}>

        <MyAccount/>
      </AccountSideNav>
    </>
  );
};
