import React from "react";
import AccountSideNav from "../components/AccountSideNav/AccountSideNav";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import RegisterForm from "../components/RegisterForm/RegisterForm";
const Signup = () => {
  return (
    <>
      <Header />
      <AccountSideNav>
        {/* <LoginForm /> */}
        <RegisterForm />
      </AccountSideNav>
      <Footer/>
    </>
  );
};

export default Signup;
