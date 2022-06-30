import React from "react";
import style from "./addtocart.module.css";
import { GrClose } from "react-icons/gr";
import "./arrowandborder.css";
const addtocart = ({ setCart }) => {
  return (
    <>
      <div className={style.view_addtocart} style={{ bottom: "80px" }}>
        <div className="container">
          <div className={`${style.closebutton} d-flex `}>
            <GrClose
              className={style.closeicon}
              onClick={() => setCart("")}
            />
            <p className={`${style.filterbutton} d-flex `}>Choose Size</p>
          </div>

          <div className={style.sizebutton_align}>
            <p>SIZE</p>
            <div className={style.button_model}>
              <span type="button" className={style.size_button}>
                XS
              </span>
              <span type="button" className={style.size_button}>
                S
              </span>
              <span
                type="button"
                className={`crossbutton ${style.size_button} `}
              >
                M
              </span>
              <span type="button" className={style.size_button}>
                L
              </span>
              <span type="button" className={style.size_button}>
                XL
              </span>
            </div>
          </div>
          <p style={{ color: "#000", fontSize: "12px", fontWeight: "500" }}>
            The model is 165cm and is wearing lorem ipsum.
          </p>
        </div>
        <button type="button" className={style.cartbutton}>
          ADD TO CART
        </button>
      </div>
    </>
  );
};

export default addtocart;
