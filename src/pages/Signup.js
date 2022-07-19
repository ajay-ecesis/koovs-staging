import React from "react";
import AccountSideNav from "../components/AccountSideNav/AccountSideNav";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import LoginForm from "../components/LoginForm/LoginForm";
import RegisterForm from "../components/RegisterForm/RegisterForm";
const Signup = () => {
  return (
    <>
      <Header />
      <AccountSideNav>
        <div className="d-none d-sm-block d-md-none ">
          <LoginForm />
        </div>
        <RegisterForm />
      </AccountSideNav>
      <Footer />
    </>
  );
};

export default Signup;
