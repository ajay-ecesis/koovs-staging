import React from 'react';
import { Link } from 'react-router-dom';
import styles from './accountmobile.module.css';

const AccountMobile = () => {
    return (
        <>
            <section className={`container-fluid ${styles.account_section} d-sm-flex d-xs-flex d-lg-none d-xl-none `} >
                <div className={` ${styles.account_actions} `}>
                    <div className={styles.account_mobile}><Link to="/user/account" style={{textDecoration:"none",color:"black"}}> <h4 className={styles.account_heading}>ACCOUNT</h4></Link></div>
                    <div className="account-nav ">
                        <div className={` ${styles.account_navheadings} d-flex flex-column pt-3`}>
                        <Link to="/user/signup" style={{textDecoration:"none",color:"black"}}>  <span className={`active`}>Sign In / Register</span></Link>
                        <Link to="/orders" style={{textDecoration:"none",color:"black"}}>    <span>Orders and Returns</span></Link>
                        <Link to="/user/account" style={{textDecoration:"none",color:"black"}}> <span>My Information</span></Link>
                        <Link to="/wishlist" style={{textDecoration:"none",color:"black"}}>     <span>Wishlist</span></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AccountMobile