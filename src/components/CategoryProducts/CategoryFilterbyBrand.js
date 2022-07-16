import React, { useState } from "react";
import styles from "./categoryfilterbybrand.module.css";
import { GrClose } from "react-icons/gr";
import StickyFooter from "./StickFooter";

const CategoryFilterbyBrand = ({
  setBrand,
  item,
  applyFilter,
  filterType,
  setFilter,
}) => {
  const [isSelect, setSelect] = useState(false);
  return (
    <>
      <div className={styles.search_brand}>
        <div className={`${styles.closebutton} d-flex `}>
          <GrClose
            className={styles.closeicon}
            onClick={() => setBrand(false)}
          />
          <p className={`${styles.filterbutton} d-flex `}>Brand</p>
        </div>
        <div className={`${styles.search_box} d-block`}>
          <input
            type="search"
            id="searchProduct"
            name="searchProduct"
            placeholder="SEARCH"
            className={`mt-4 ${styles.btnStyle}`}
          />
        </div>

        {/* suggested brands */}

        <h4 className={` ${styles.text_menu}`}>Suggested Brands</h4>
        <div className={` ${styles.brand_buttons}`}>
          {item?.data?.slice(0, 6)?.map((brand) => {
            return (
              <>
                <div className={styles.brand_btn}>
                  <button
                    className={styles.text_suggested}
                    onClick={() => applyFilter(item.id, brand.id)}
                  >
                    {brand.label}
                  </button>
                </div>
              </>
            );
          })}
        </div>
        <div>
          <div>
            <div className={styles.dropdown_custom}>
              <div className={styles.dropdown_header}>Brands</div>

              {item?.data?.map((brand) => {
                return (
                  <>
                    <div
                      href="#"
                      className={styles.items}
                      onClick={() => applyFilter(item.id, brand.id)}
                    >
                      {brand.label}

                      {filterType.brand_fq.includes(brand.id) && (
                        <i
                          class="fa fa-check"
                          aria-hidden="true"
                          style={{ position: "absolute", right: "40px" }}
                        ></i>
                      )}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <StickyFooter setFilter={setFilter} />
    </>
  );
};

export default CategoryFilterbyBrand;
