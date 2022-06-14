import React, { useEffect } from "react";
import { loadSingleProduct } from "../api/commonApi";
import { useParams } from "react-router-dom";

export const Test = () => {
    let { productId, lineId } = useParams();

    useEffect(() => {
        if (productId && lineId) loadProducts();
    }, []);
    const loadProducts = async () => {
        let data = await loadSingleProduct(productId, lineId);
        console.log("data", data)
    };
    return (<>






    </>);
};

export default Test;
