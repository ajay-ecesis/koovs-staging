import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import AccountSideNav from "../components/AccountSideNav/AccountSideNav";
import Header from "../components/Header/Header";

function Login() {
  return (
    <>
      <Header />
      <AccountSideNav>
        <LoginForm />
      </AccountSideNav>
    </>
  );
}

export default Login;
