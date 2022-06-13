import axios from "axios"

const clentServer = process.env.REACT_APP_CLIENT_SERVER

// This file contains apis that are commonly used for product listingm

export const loadHeaderCategory = async () => {

    try {
        const config = {
            headers: {
                "X-API-CLIENT": "WEB",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',

            }
        };
        let { data } = await axios.get(clentServer + "/jarvis-home-service/v1/home/header/template", config)

        console.log("data", data.data.items)
        data = data.data.items
        return data;

    }
    catch (err) {
        console.log("its an err", err)
    }
}


export const loadProductsApi = async (category, subcategory) => {
    const config = {
        headers: {
            "X-API-CLIENT": "WEB",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',

        }
    };
    try {
        let { data } = await axios.get(`${clentServer}/search-service/v1/products/listing/complete?href=https://www.koovs.com/${category}/${subcategory}&page-size=4&sort=relevance&page=0`, config)

        return data
    }
    catch (err) {
        console.log("its an err", err)

    }
};



export const loadProductByCategoryApi = async (category, subCategory,) => {
    const config = {
        headers: {
            "X-API-CLIENT": "WEB",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
    };

    try {
        let { data } = await axios.get(`${clentServer}/search-service/v1/products/listing/complete?href=https://www.koovs.com/${category}/${subCategory}&page-size=8&sort=relevance&page=0`, config)

        return data?.data
    }
    catch (err) {
        console.log("its an err", err)
    }
}

// single product loading api
export const loadSingleProduct = async (productId, lineId) => {
    const config = {
      headers: {
        "X-API-CLIENT": "WEB",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };
    try {
      let { data } = await axios.get(
        `${clentServer}/jarvis-service/v1/product/details/batch/line?productid=${productId}&lineid=${lineId}`,
        config
      );
      return data;
    } catch (err) {

        console.log(err)
    }
  };
  