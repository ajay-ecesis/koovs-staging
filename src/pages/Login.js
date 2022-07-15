import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import AccountSideNav from "../components/AccountSideNav/AccountSideNav";
import Header from "../components/Header/Header";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import Footer from "../components/Footer/Footer";
function Login() {
  return (
    <>
      <Header />
      <AccountSideNav index={1}>
        <LoginForm />
        <div className="d-lg-none d-md-none d-sm-block">
          <RegisterForm />
        </div>
      </AccountSideNav>
      <Footer/>
    </>
  );
}

export default Login;
