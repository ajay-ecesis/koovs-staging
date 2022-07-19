import React, { useEffect, useState } from "react";
import { getMyAddressApi, getMyProfileApi } from "../api/account";
import AccountMobile from "../components/AccountSideNav/AccountMobile";
import AccountSideNav from "../components/AccountSideNav/AccountSideNav";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MyAccount from "../components/MyAccount/MyAccount";

export const MyInformationPage = () => {
  const [shippingAddress, setShippingAddress] = useState([]);
  useEffect(() => {
    loadMyAddress();
  }, []);

  const loadMyAddress = async () => {
    let details = await getMyAddressApi();
    setShippingAddress(details);
  };
  return (
    <>
      <Header />

      <AccountSideNav index={3}>
        <MyAccount
          shippingAddress={shippingAddress}
          loadMyAddress={loadMyAddress}
        />
      </AccountSideNav>
    </>
  );
};
