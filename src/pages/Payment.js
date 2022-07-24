import React, { useEffect, useRef, useState } from "react";
import {
  checkForActiveOffersApi,
  getCurrentSelectedAddress,
  getPaymentGatewaysApi,
} from "../api/checkout";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import PaymentSection from "../components/PaymentSection/PaymentSection";
import { ReCaptcha, loadReCaptcha } from "react-recaptcha-v3";

function PaymentPage() {
  const [paymentModes, setPaymentModes] = useState("");
  const [addressDetails, setAddressDetails] = useState();
  const [selectedPaymentGateway, setSelectedPaymentGateway] = useState("");
  const [key, setKey] = useState(1);
  const googleCaptcha = useRef();
  const [token, setToken] = useState("");

  useEffect(() => {
    loadPaymentGateways();
  }, []);
  const loadPaymentGateways = async () => {
    let result = await getPaymentGatewaysApi();
    setPaymentModes(result?.data?.paymentModes);
    let address = await getCurrentSelectedAddress();
    setAddressDetails(address);
  };

  const checkForActiveOffers = async (item) => {
    let obj = {};
    await checkForActiveOffersApi();
  };

  useEffect(() => {
    reloadRecaptcha();
  }, []);

  const reloadRecaptcha = () => {
    setKey(key + 1);
    loadReCaptcha(process.env.REACT_APP_GOOGLE_RECAPTCHA_KEY); //sitekey load recaptcha
  };

  function handleVerify(token) {
    setToken(token);
  }
  return (
    <>
      <ReCaptcha
        ref={googleCaptcha}
        sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA_KEY}
        action="payment"
        verifyCallback={handleVerify}
        key={key}
      />{" "}
      <Header />
      <PaymentSection
        paymentModes={paymentModes}
        addressDetails={addressDetails}
        checkForActiveOffers={checkForActiveOffers}
        setSelectedPaymentGateway={setSelectedPaymentGateway}
        selectedPaymentGateway={selectedPaymentGateway}
        reCaptcha={token}
      />
      <Footer />
    </>
  );
}

export default PaymentPage;
