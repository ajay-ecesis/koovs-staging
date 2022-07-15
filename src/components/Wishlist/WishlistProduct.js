import React, { useEffect, useState } from "react";
import "./wishlist.css";
import { Dropdown } from "react-bootstrap";
import productItem from "../../assets/images/shirts.png";
import { IoIosArrowDown } from "react-icons/io";
import { GrClose } from "react-icons/gr";
import {
  addToCartAPI,
  getWishlistItems,
  removeItemFromWishList,
} from "../../api/cart";
import { useDispatch } from "react-redux/es/exports";
import { ReCaptcha, loadReCaptcha } from "react-recaptcha-v3";

const WishlistProduct = ({ products, getWishlistItemsByBatchId, loading }) => {
  let dispatch = useDispatch();
  const [reCaptcha, setRecaptcha] = useState("");
  const [key, setKey] = useState(1);
  const [btnLoading, setBtnLoading] = useState(false);

  const removeProductFromWishlist = async (sku, lineId) => {
    let data = await removeItemFromWishList(sku, lineId);
    if (data) {
      window.location.reload();
    } else {
      window.location.reload();
    }
  };

  const addToCart = async (product) => {
    setBtnLoading(product.product.id);
    var [batchSkuId] = product.quantity.data.filter(function (item) {
      return item.skuId == product.product.sku;
    });
    // add to cart api
    let prodDetails = {
      product: batchSkuId,
      reCaptcha: reCaptcha,
    };
    let data = await addToCartAPI(prodDetails);

    if (data) {
      let cart = {
        product: { sku: prodDetails.product.skuId },
        qty: 1,
        vendor: prodDetails.product.feDetails.vendor,
        warehouse: prodDetails.product.feDetails.warehouse,
        lot: prodDetails.product.feDetails.lot,
      };

      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      }); // increase the cart count.
    }
    reloadRecaptcha();
    setBtnLoading(false);
  };
  useEffect(() => {
    reloadRecaptcha();
  }, []);

  const reloadRecaptcha = () => {
    setKey(key + 1);
    loadReCaptcha(process.env.REACT_APP_GOOGLE_RECAPTCHA_KEY); //sitekey load recaptcha
  };

  function handleVerify(token) {
    setRecaptcha(token);
  }

  const loadingPlaceHolder = () => {
    return (
      <>
        <div className="Product-wishlist col-xl-8  col-lg-8  col-sm-6  col-6">
          <div class="skeleton-a6p58lb6tt3"></div>
        </div>
      </>
    );
  };
  return (
    <>
      <ReCaptcha
        sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA_KEY}
        action="addToCart"
        verifyCallback={handleVerify}
        key={key}
      />
      {loading && loadingPlaceHolder()}
      {products?.length > 0 &&
        products.map((item) => {
          return (
            <>
              <div
                className="Product-wishlist col-xl-4  col-lg-4  col-sm-6  col-6"
                key={item.product.sku}
              >
                <div className="close-wishlist">
                  <GrClose
                    className="wishclose"
                    onClick={() =>
                      removeProductFromWishlist(
                        item.product.sku,
                        item.product.lineId
                      )
                    }
                  />
                </div>
                <div className="text-wishlist ">
                  <img
                    src={item.product.imageUrls[0]}
                    className="img-fluid wish-product"
                    alt="Koovs product Front image"
                  />
                  <div className="wish-description">
                    <div className="wish-detailtext">
                      <p>{item.product.brandName}</p>
                      <p>{item.product.productName}</p>
                    </div>
                    <div className="wish-price">
                      <p>₹ {item.product.discountPrice}</p>
                    </div>
                  </div>

                  {/* <Dropdown className="dropdown-wishlist d-flex">
                    <Dropdown.Toggle
                      className="drop-toggle d-flex"
                      id="dropdown-autoclose-true"
                    >
                     Quantity <IoIosArrowDown className="wishlistarrowicon" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="wishlist-dropitems">
                      <Dropdown.Item>1</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown> */}
                  <div className="addtobag-button">
                    {btnLoading == item.product.id ? (
                      <>
                        <button type="button" className="addtobag">
                          ADDING TO BAG...
                        </button>
                      </>
                    ) : (
                      <button
                        type="button"
                        className="addtobag"
                        onClick={() => addToCart(item)}
                      >
                        ADD TO BAG
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </>
          );
        })}

      {products.length == 0 && !loading && (
        <section className="wishlistnoitems-section">
          <p className="noitems-heading d-sm-block d-lg-none">Wishlist</p>
          <p>Save your favourite items to start building your wishlist.</p>
          <div className="get-inspired d-flex">
            <button type="button" className="getinspiredbutton">
              GET INSPIRED
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default WishlistProduct;
