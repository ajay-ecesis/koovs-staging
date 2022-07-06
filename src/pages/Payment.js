import React, { useEffect, useState } from "react";
import { getCurrentSelectedAddress, getPaymentGatewaysApi } from "../api/checkout";
import Header from "../components/Header/Header";
import PaymentSection from "../components/PaymentSection/PaymentSection";

function PaymentPage() {
  const [paymentModes, setPaymentModes] = useState("");
  const [addressDetails,setAddressDetails]=useState()
  useEffect(() => {
    loadPaymentGateways();
  }, []);
  const loadPaymentGateways = async () => {
    let result = await getPaymentGatewaysApi();

    console.log("result", result);
    setPaymentModes(result?.data?.paymentModes);
   let address=await getCurrentSelectedAddress();  
   setAddressDetails(address)
};
  return (
    <>
      <Header />
      <PaymentSection paymentModes={paymentModes} addressDetails={addressDetails}/>
    </>
  );
}

export default PaymentPage;
