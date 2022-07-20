import React, { useEffect, useState } from "react";
import { getVisitorToken } from "../api/auth";
import FourNotFourBody from "../components/404/FourNotFourBody";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import { ReCaptcha, loadReCaptcha } from "react-recaptcha-v3";
import { useDispatch, useSelector } from "react-redux";

function FourNotFour() {
  const userDetails = useSelector((state) => state.user);
  //   useEffect(() => {
  //     console.log("user detailssssss", userDetails);
  //   }, [userDetails]);
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     loadReCaptcha("6LdSHv0UAAAAACfq2Tk2XQrk1kek189iNpni7nCI");

  //   }, []);
  //   const [token, setToken] = useState();

  //   function handleVerify(token) {
  //     console.log("token---------", token);
  //   }
  return (
    <>
      <Header />
      <>
      <div className="page-wrap d-flex flex-row align-items-center" style={{minHeight:"100vh",background: "yellow"}}>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-12 text-center">
        <span className="display-1 d-block">404</span>
        <div className="mb-4 lead">
          The page you are looking for was not found.
        </div>
        <a href="https://www.totoprayogo.com/#" className="btn btn-link">
          Back to Home
        </a>
      </div>
    </div>
  </div>
</div>

      </>
      <Footer />
    </>
  );
}

export default FourNotFour;
