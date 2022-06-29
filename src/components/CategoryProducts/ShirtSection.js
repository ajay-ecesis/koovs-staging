import React, { useState } from "react";
import shoppingbag from "../../assets/images/Shopping-bag.png";
import "./maincategoryproductslider.css";
import AddToCart from "./AddToCart";
import productItem from "../../assets/images/shirts.png";

const ShirtSection = ({ products, loading }) => {
  const [cart, setCart] = useState(false);
  return (
    <>
      <div class="row image-color mt-3">
        {!loading &&
          products?.length > 0 &&
          products.map((item) => {
            return (
              <>
                <div class="shirt-col col-xl-3  col-lg-3  col-sm-6  col-6">
                  {" "}
                  <div className="text-category">
                    <div className="favIcon me-2 ">
                      <label for="heart">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      </label>
                    </div>
                    <div className="prod1">
                      <img
                        src={item.imageSmallUrl}
                        className="img-fluid"
                        alt="Koovs product Front image"
                      />
                      <div className="shop-icon">
                        <img src={shoppingbag} onClick={() => setCart(!cart)} />
                        {cart && <AddToCart setCart={setCart} />}
                      </div>

                      <div className="preview-color">
                        <input className="blue" name="color" type="radio" />
                        <input className="yellow" name="color" type="radio" />
                        <input className="white" name="color" type="radio" />
                      </div>
                    </div>

                    <div className="product-description d-flex justify-content-between px-3">
                      <div className="prodDetail-text">
                        <p className="fw-bold">{item.brandName}</p>
                        <p>{item.productName}</p>
                      </div>
                      <div className="prodDetail-text">
                        <p>₹ {item.discountPrice}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        {loading && <>Loading...</>}
        {/* <p className="viewall-text fw-bold d-sm-block d-lg-none">
          <u style={{ cursor: "pointer" }}>View All</u>
        </p> */}
      </div>
    </>
  );
};

export default ShirtSection;
