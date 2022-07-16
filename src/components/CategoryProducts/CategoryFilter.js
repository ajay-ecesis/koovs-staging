import React, { useState } from "react";
import styles from "./categoryfilter.module.css";
import { Accordion } from "react-bootstrap";
import { GrClose } from "react-icons/gr";
import CategoryFilterbyBrand from "./CategoryFilterbyBrand";
import CategoryFilterbyProduct from "./CategoryFilterByProduct";
import CategoryFilterbyColor from "./CategoryfilterbyColor";
import CategoryFilterbySize from "./CategoryfilterbySize";
import CategoryFilterbyPrice from "./CategoryfilterbyPrice";

const CategoryFilter = ({
  setFilter,
  products,
  filterTypes,
  result,
  changeSortOption,
  applyFilter,
  filterType,
  loading,
  setLoading,
  goToProductDetailPage,
  addToWishlist,
  removeWishlist,
  page,
  token,
  setPag,
  reloadRecaptcha,
  sortLabel,
}) => {
  const [brand, setBrand] = useState(false);
  const [product, setProduct] = useState(false);
  const [color, setColor] = useState(false);
  const [size, setSize] = useState(false);
  const [price, setPrice] = useState(false);
  return (
    <>
      <div className={`${styles.accordion_filter} d-block d-lg-none`}>
        <div className={`${styles.closebutton} d-flex `}>
          <GrClose
            className={styles.closeicon}
            onClick={() => setFilter(false)}
          />
          <p className={`${styles.filterbutton} d-flex `}>Filter</p>
        </div>

        <Accordion defaultActiveKey="0" flush>
          {filterTypes?.length > 0 &&
            filterTypes?.map((item) => {
              return (
                <>
                  {item.id == "brand_fq" && (
                    <Accordion.Item
                      eventKey="1"
                      className={styles.productborder}
                    >
                      <Accordion.Header
                        className="arrowright filter-item"
                        onClick={() => setBrand(!brand)}
                      >
                        {" "}
                        {item.label}
                      </Accordion.Header>
                      {brand && <CategoryFilterbyBrand setBrand={setBrand} item={item} applyFilter={applyFilter} filterType={filterType} setFilter={setFilter}/>}
                    </Accordion.Item>
                  )}

                  {item.id == "color_fq" && (
                    <Accordion.Item
                      eventKey="2"
                      className={styles.productborder}
                    >
                      <Accordion.Header
                        className="arrowright"
                        onClick={() => setColor(!color)}
                      >
                        {" "}
                        Color
                      </Accordion.Header>
                      {color && <CategoryFilterbyColor setColor={setColor} item={item} applyFilter={applyFilter} filterType={filterType}  setFilter={setFilter}/>}
                    </Accordion.Item>
                  )}

                  {item.id == "price_fq" && (
                    <Accordion.Item
                      eventKey="4"
                      className={styles.productborder}
                    >
                      <Accordion.Header
                        className="arrowright"
                        onClick={() => setPrice(!price)}
                      >
                        {" "}
                        Price
                      </Accordion.Header>
                      {price && <CategoryFilterbyPrice setPrice={setPrice} item={item} applyFilter={applyFilter} filterType={filterType} filterTypes={filterTypes}  setFilter={setFilter}/>}
                    </Accordion.Item>
                  )}

                  {item.id == "size_fq" && (
                    <Accordion.Item
                      eventKey="3"
                      className={styles.productborder}
                    >
                      <Accordion.Header
                        className="arrowright"
                        onClick={() => setSize(!size)}
                      >
                        {" "}
                        Size
                      </Accordion.Header>
                      {size && <CategoryFilterbySize setSize={setSize} item={item} applyFilter={applyFilter} filterType={filterType}  setFilter={setFilter}/>}
                    </Accordion.Item>
                  )}
                </>
              );
            })}

         
        </Accordion>
      </div>
    </>
  );
};
export default CategoryFilter;
