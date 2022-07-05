// all apis related to checkout can be found here..

import axios from "axios";
import toast from "react-hot-toast"
const clientServer = process.env.REACT_APP_CLIENT_SERVER;
export const loadMyAddressDetailsApi = async () => {
  let authToken = await JSON.parse(localStorage.getItem("userToken"));

  const config = {
    headers: {
      Authorization: authToken,
      "X-API-CLIENT": "WEB",
    },
  };

  try {
    let { data } = await axios.get(
      clientServer + "/jarvis-order-service/v1/address",
      config
    );
    console.log("this is data", data);
    return data;
  } catch (err) {}
};

export const selectAddressApi = async (id) => {
  let authToken = await JSON.parse(localStorage.getItem("userToken"));

  const config = {
    headers: {
      Authorization: authToken,
      "X-API-CLIENT": "WEB",
    },
  };
  try {
    let { data } = await axios.put(
      clientServer + `/jarvis-order-service/v2/address/select/${id}`,
      {},
      config
    );

    return data;
  } catch (err) {}
};

// add new address

export const addNewAddressApi = async (address) => {
  let authToken = await JSON.parse(localStorage.getItem("userToken"));

  const config = {
    headers: {
      Authorization: authToken,
      "X-API-CLIENT": "WEB",
    },
  };
  try {
    let data = await axios.post(
      clientServer + `/jarvis-order-service/v1/address`,
      address,
      config
    );

    if (data.status == 200) {
      toast.success("created new address")
      return true;
    } else {
      return false;
    }
  } catch (err) {
    toast.error(err.response.data.message)
    return false;
  }
};