// All APIs related to cart can be found here..
import axios from "axios";
import { toast } from "react-hot-toast";

const clientServer = process.env.REACT_APP_CLIENT_SERVER;

export const addToCartAPI = async (cartData) => {
  let authToken = await JSON.parse(localStorage.getItem("userToken"));
  if (!authToken) {
    authToken = await JSON.parse(localStorage.getItem("guestToken"));
  }
  const config = {
    headers: {
      Authorization: authToken,
      "X-API-CLIENT": "WEB",
      "CAN-FETCH-VALUE": "NO",
      "X-CAPTCHA-TOKEN": cartData.reCaptcha,
      "X-CAPTCHA-ACTION": "addToCart",
    },
  };

  try {
    const res = await axios.post(
      clientServer + "/jarvis-order-service/v1/cart",
      {
        addItemList: [
          {
            sku: cartData.product.skuId,
            qty: 1,
            vendor: cartData.product.feDetails.vendor,
            warehouse: cartData.product.feDetails.warehouse,
            lot: cartData.product.feDetails.lot,
          },
        ],
      },
      config
    );
    toast.success("Product added to cart");
    return true;
  } catch (err) {
    return false;
  }
};

export const getCartItems = async () => {
  let authToken = await JSON.parse(localStorage.getItem("userToken"));
  if (!authToken) {
    authToken = await JSON.parse(localStorage.getItem("guestToken"));
  }
  const config = {
    headers: {
      Authorization: authToken,
      "X-API-CLIENT": "WEB",
      "CAN-FETCH-VALUE": "NO",
    },
  };

  try {
    const res = await axios.get(
      clientServer + "/jarvis-order-service/v1/cart",
      config
    );

    console.log("response from get cart api", res);
    return res?.data?.cart;
  } catch (err) {
    return false;
  }
};

export const removeCartItem = async (skuId) => {
  let authToken = await JSON.parse(localStorage.getItem("userToken"));
  if (!authToken) {
    authToken = await JSON.parse(localStorage.getItem("guestToken"));
  }
  const config = {
    headers: {
      Authorization: authToken,
      "X-API-CLIENT": "WEB",
      "CAN-FETCH-VALUE": "NO",
    },
  };

  try {
    const res = await axios.delete(
      `${clientServer}/jarvis-order-service/v1/cart/${skuId}`,
      config
    );
    if (res.status == 200) {
      toast.success("Product removed from cart");

      return true;
    }
  } catch (err) {
    return false;
  }
};

export const incrementCartQuantity = async (cartData) => {
  let authToken = await JSON.parse(localStorage.getItem("userToken"));
  if (!authToken) {
    authToken = await JSON.parse(localStorage.getItem("guestToken"));
  }
  const config = {
    headers: {
      Authorization: authToken,
      "X-API-CLIENT": "WEB",
      "CAN-FETCH-VALUE": "NO",
    },
  };

  try {
    const res = await axios.post(
      clientServer + "/jarvis-order-service/v1/cart",
      {
        addItemList: [
          {
            sku: cartData.product.skuId,
            qty: 1,
            vendor: cartData.product.feDetails.vendor,
            warehouse: cartData.product.feDetails.warehouse,
            lot: cartData.product.feDetails.lot,
          },
        ],
      },
      config
    );
    if (res.status == 200) {
      return true;
    }
  } catch (err) {
    return false;
  }
};
