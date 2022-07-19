import React from "react";
import { Link } from "react-router-dom";
import styles from "./accountsidenav.module.css";
const AccountSideNav = ({ children,index  }) => {
  return (
    <>
      <section className={`container-fluid ${styles.account_section} d-flex`}>
        <div className={` ${styles.account_actions} col-3`}>
          <div className={styles.account_mobile}>
            <h4 className={styles.account_heading}>Account</h4>
          </div>

          <div className="account-nav ">
            <div
              className={` ${styles.account_navheadings} d-flex flex-column pt-3`}
            >
              <Link
                to="/signup/login"
                style={{ textDecoration: "none", color: "black" }}
              >
             <span className={`${index == 1 &&  styles.active}`}>Sign In / Register</span>
              </Link>
              <Link
                to="/orders"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                <span className={`${index == 2 && styles.active}`}>Orders and Returns</span>{" "}
              </Link>
              <Link
                to="/user/account"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                <span className={`${index == 3 &&  styles.active}`}>My Information</span>
              </Link>
              <Link
                to="/wishlist"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                <span className={`${index == 4&&  styles.active}`}>Wishlist</span>{" "}
              </Link>
            </div>
          </div>
        </div>

        <div className={`col `}>{children}</div>
      </section>
    </>
  );
};

export default AccountSideNav;
