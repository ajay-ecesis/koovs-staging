// All APIs related to cart and wishlist can be found here..
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getMyIpAddress } from "./auth";

const clientServer = process.env.REACT_APP_CLIENT_SERVER;

export const createOrderApi = async (paymentGateway, reCaptcha) => {
  let authToken = await JSON.parse(localStorage.getItem("userToken"));
  if (!authToken) {
    authToken = await JSON.parse(localStorage.getItem("userToken"));
  }
  const config = {
    headers: {
      "X-API-CLIENT": "WEB",
      Authorization: authToken,
      "X-CAPTCHA-TOKEN": reCaptcha,
      "X-CAPTCHA-ACTION": "payment",
      "X-REMOTE-IP": await getMyIpAddress(),
    },
  };
  console.log("Payment detail;s", paymentGateway);
  try {
    const res = await axios.post(
      clientServer + "/jarvis-order-service/v1/order",
      {
        payment: {
          method: paymentGateway?.paymentMethod,
          gateway: paymentGateway?.gateway,
        },
      },

      config
    );
console.log("resposnse",res)
    return true;
  } catch (err) {
    return false;
  }
};

export const codSendOtp = async () => {
  let authToken = await JSON.parse(localStorage.getItem("userToken"));
  if (!authToken) {
    authToken = await JSON.parse(localStorage.getItem("guestToken"));
  }
  const config = {
    headers: {
      Authorization: authToken,
      "X-API-CLIENT": "WEB",
      "CAN-FETCH-VALUE": "NO",
      //   "X-CAPTCHA-TOKEN": cartData.reCaptcha,
      "X-CAPTCHA-ACTION": "addToCart",
    },
  };

  try {
    return true;
  } catch (err) {
    return false;
  }
};
