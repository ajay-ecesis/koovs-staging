import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header/Header";
import ProductDescription from "../components/ProductDescription/ProductDescription";
import FavouriteProducts from "../components/FavouriteProducts/FavouriteProducts";
import Footer from "../components/Footer/Footer";
import { loadSingleProduct } from "../api/commonApi";
import { useParams } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import { ReCaptcha, loadReCaptcha } from "react-recaptcha-v3";

const ProductDetail = () => {
  let { productId, lineId } = useParams();
  const [productDetails, setProductDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");
  const googleCaptcha = useRef();

  useEffect(() => {
    if (productId && lineId) loadProducts();
  }, [productId, lineId]);
  const loadProducts = async () => {
    setLoading(true);
    let data = await loadSingleProduct(productId, lineId);
    setProductDetails([data]);
    setLoading(false);
  };

  useEffect(() => {
    reloadRecaptcha();
  }, []);

  const reloadRecaptcha = () => {
    loadReCaptcha("6LdnRa4gAAAAAPMFQgPajQ0i4D_RuikJ-aHU66Qw"); //sitekey load recaptcha
  };

  function handleVerify(token) {
    setToken(token);
    console.log(token);
  }

  const reLoadCaptchaKey = () => {
    googleCaptcha.current.execute();
  };
  return (
    <>
      <ReCaptcha
        ref={googleCaptcha}
        sitekey="6LdnRa4gAAAAAPMFQgPajQ0i4D_RuikJ-aHU66Qw"
        action="addToCart"
        verifyCallback={handleVerify}
      />{" "}
      <Header />
      {!loading ? (
        <>
          <ProductDescription
            productData={productDetails}
            reCaptcha={token}
            reLoadCaptchaKey={reLoadCaptchaKey}
          />
          <FavouriteProducts
            skuId={productDetails[0]?.data[0]?.product.sku}
            reCaptcha={token}
          />
        </>
      ) : (
        <>
          <div>
            <div class="skeleton-uuypnq47b80"></div>{" "}
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default ProductDetail;
