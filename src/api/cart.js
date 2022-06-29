// All APIs related to cart and wishlist can be found here..
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

// Wishlist related apis

export const addToWishlistAPI = async (productData) => {
  let authToken = await JSON.parse(localStorage.getItem("userToken"));

  console.log("add to wishlist", productData);

  const config = {
    headers: {
      Authorization: authToken,
      "X-API-CLIENT": "WEB",
      "CAN-FETCH-VALUE": "NO",
      "X-AUTH-TOKEN": authToken,
      "X-API-CLIENT": "WEB",
      "X-CAPTCHA-TOKEN": productData.reCaptcha,
      "X-CAPTCHA-ACTION": "addToCart",
      "X-REMOTE-IP": "",
    },
  };
  try {
    const res = await axios.post(
      clientServer + "/jarvis-order-service/v1/wishlist",
      {
        sku: productData.product.skuId,
        line: productData.lineId,
        product: productData.productId,
      },
      config
    );
    if (res.status == 200) {
      return true;
    }
  } catch (err) {}
};

// get items from wishlist
export const getWishlistItems = async () => {
  let authToken = await JSON.parse(localStorage.getItem("userToken"));

  const config = {
    headers: {
      Authorization: authToken,
      "X-API-CLIENT": "WEB",
    },
  };
  try {
    const res = await axios.get(
      clientServer + "/jarvis-order-service/v1/wishlist",
      config
    );
    if (res.status == 200) {
      return res.data;
    }
  } catch (err) {}
};

// load wishlist by skuid
export const loadWishListBySkuIdApi = async (skuIds) => {
  let authToken = await JSON.parse(localStorage.getItem("userToken"));

  const config = {
    headers: {
      Authorization: authToken,
      "X-API-CLIENT": "WEB",
    },
  };
  try {
    const res = await axios.get(
      clientServer + "/jarvis-service/v1/product/details/batch?ids=" + skuIds,
      config
    );
    if (res.status == 200) {
      return res.data;
    }
  } catch (err) {}
};

// remove product items from wishlist

export const removeItemFromWishList = async (skuId, lineId) => {
  let authToken = await JSON.parse(localStorage.getItem("userToken"));


  const config = {
    headers: {
      Authorization: authToken,
      "X-API-CLIENT": "WEB",
    },
  };
  try {
    const res = await axios.delete(clientServer+`/jarvis-order-service/v1/wishlist?line=${lineId}&sku=${skuId}`,
      config
    );
    if (res.status == 200) {
      toast.success("Removed from")
      return res.data;
    }
  } catch (err) {
    console.error("edrr", err);
  }
};
