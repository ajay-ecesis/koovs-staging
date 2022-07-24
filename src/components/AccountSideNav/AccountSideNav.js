import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "./accountsidenav.module.css";
const AccountSideNav = ({ children, index }) => {
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch({
      type: "USER_LOGOUT",
      payload: null,
    });
    toast.success("successfully logged Out");
    document.getElementById("menu-toggle").checked = false;
    navigate("/");
  };
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
                <span className={`${index == 1 && styles.active}`}>
                  Sign In / Register
                </span>
              </Link>
              <Link
                to="/orders"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                <span className={`${index == 2 && styles.active}`}>
                  Orders and Returns
                </span>{" "}
              </Link>
              <Link
                to="/user/account"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                <span className={`${index == 3 && styles.active}`}>
                  My Information
                </span>
              </Link>
              <Link
                to="/wishlist"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                <span className={`${index == 4 && styles.active}`}>
                  Wishlist
                </span>{" "}
              </Link>
              <span style={{cursor:"pointer"}} onClick={() => logoutUser()}>Logout</span>{" "}
            </div>
          </div>
        </div>

        <div className={`${styles.order_children} col`}>{children}</div>
      </section>
    </>
  );
};

export default AccountSideNav;
