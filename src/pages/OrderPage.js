import React from 'react'
import AccountSideNav from '../components/AccountSideNav/AccountSideNav'
import Header from '../components/Header/Header'
import OrdersList from "../components/OrdersList/OrdersList"
const OrderPage = () => {
  return (
<>
<Header />
    <AccountSideNav >
    <OrdersList/>
    </AccountSideNav>

</>

  )
}

export default OrderPage