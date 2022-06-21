import React from 'react'
import "./accountsidenav.css"
const AccountSideNav = ({ children }) => {
    return (
        <>

            <section className=" container-fluid account-section d-flex">


                <div className='account-actions col-3'>



                    <h4 >Account</h4>

                    <div className="account-nav ">

                        <div className=" d-flex flex-column pt-3">
                            <span className="active">Sign In / Register</span>
                            <span>Orders and Returns</span>
                            <span>My Information</span>
                            <span>Wishlist</span>
                        </div>
                    </div>
                </div>
                <div className='col '>
                    {children}

                </div>


            </section>
        </>
    )
}

export default AccountSideNav