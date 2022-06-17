import React from 'react'
import AccountSideNav from '../components/AccountSideNav/AccountSideNav'
import Header from '../components/Header/Header'
import LoginForm from '../components/LoginForm/LoginForm'
import RegisterForm from '../components/RegisterForm/RegisterForm'

function Login() {
  return (
   <>
   <Header/>
   <AccountSideNav>
   <LoginForm/>
   <RegisterForm/>
   </AccountSideNav>
   </>
  )
}

export default Login