import React, { useEffect, useState } from "react";
import "./maincategoryproductslider.css";
import "react-multi-carousel/lib/styles.css";
import productItem from "../../assets/images/shirts.png";
import shoppingbag from "../../assets/images/Shopping-bag.png";
import filterIcon from "../../assets/images/filtericon.png";
import Dropdown from "react-bootstrap/Dropdown";
import "./arrowandborder.css";
import { IoIosArrowDown } from "react-icons/io";
import { Range } from "react-range";
import ClipIcon from "../../assets/images/clipicon.png";
import AddToCart from "./AddToCart";
import ShirtSection from "./ShirtSection";

function MenCategoryProductSlider({ products, filterTypes, result,changeSortOption }) {
  const [isActive, setActive] = useState(false);
  const [isShow, setShow] = useState(false);
  const [isSelect, setSelect] = useState(false);
  const [cart, setCart] = useState(false);
  const [val, setVal] = React.useState({ min: 0, max: 100 });
  const STEP = 0.1;
  const MIN = 0;
  const MAX = 100;
  const [values, setValues] = React.useState([0, 100]);
  console.log("this is productsliderrr", products);

  const typesOfFilters = [{}];

  useEffect(() => {
    if (filterTypes) {
      var index = filterTypes.findIndex((item) => item.id === 2);
    }
  }, [filterTypes]);

  return (
    <section className="Maincategory_product_slider">
      <div className="container-fluid">
        <div className="actions justify-content-between d-none d-lg-flex">
          <div
            className="d-flex filtertext-category"
            style={{ cursor: "pointer" }}
          >
            <p className="fw-bold"> Filter</p>
            <img src={filterIcon} onClick={() => setShow(!isShow)}></img>
            {isShow && (
              <div className="d-none d-lg-flex">
                <Dropdown className="dropdown-text d-inline mx-2">
                  <Dropdown.Toggle id="dropdown-autoclose-true">
                    Brand <IoIosArrowDown className="downarrowicon" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Header className="dropdown-header">
                      A{" "}
                    </Dropdown.Header>
                    <Dropdown.Item
                      href="#"
                      className="items"
                      onClick={() => setSelect(!isSelect)}
                    >
                      Adidas{" "}
                      {isSelect && (
                        <i class="fa fa-check" aria-hidden="true"></i>
                      )}
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="items">
                      Affend{" "}
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#"
                      style={{ padding: "0px" }}
                      className=""
                    >
                      All reaons{" "}
                    </Dropdown.Item>

                    <Dropdown.Header className="dropdown-header">
                      B
                    </Dropdown.Header>
                    <Dropdown.Item href="#" className="items">
                      Billaborg
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="items">
                      Brave
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#"
                      style={{ padding: "0px" }}
                      className=""
                    >
                      Burton
                    </Dropdown.Item>

                    <Dropdown.Header className="dropdown-header">
                      C
                    </Dropdown.Header>
                    <Dropdown.Item
                      href="#"
                      style={{ padding: "0px" }}
                      className=""
                    >
                      Ci
                    </Dropdown.Item>

                    <Dropdown.Header className="dropdown-header">
                      D
                    </Dropdown.Header>
                    <Dropdown.Item href="#" className="items">
                      Degree
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="items">
                      DIWAAH
                    </Dropdown.Item>

                    <Dropdown.Header className="dropdown-header">
                      E
                    </Dropdown.Header>

                    <Dropdown.Item href="#" className="items">
                      Elisa
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="items">
                      Erika
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#"
                      style={{ padding: "0px" }}
                      className=""
                    >
                      Exolloxo
                    </Dropdown.Item>

                    <Dropdown.Header className="dropdown-header">
                      F
                    </Dropdown.Header>
                    <Dropdown.Item href="#" className="items">
                      Freakins
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#"
                      style={{ padding: "0px" }}
                      className=""
                    >
                      Freakins Unt.
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="d-inline mx-2" autoClose="inside">
                  <Dropdown.Toggle id="dropdown-autoclose-inside">
                    Color <IoIosArrowDown className="downarrowicon" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#" className="colors">
                      <span className="color-black"></span>
                      <p>Black</p>
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="colors">
                      <span className="color-grey"></span>
                      <p>Grey</p>
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="colors">
                      <span className="color-lightgrey"></span>
                      <p onClick={() => setSelect(!isSelect)}>
                        Light grey{" "}
                        {isSelect && (
                          <i class="fa fa-check" aria-hidden="true"></i>
                        )}
                      </p>
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="colors">
                      <span className="color-multi"></span>
                      <p>Multi</p>
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="colors">
                      <span className="color-navy"></span>
                      <p>Navy</p>
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="colors">
                      <span className="color-petroleum"></span>
                      <p>Petroleum</p>
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="colors">
                      <span className="color-blue"></span>
                      <p>Blue</p>
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="colors">
                      <span className="color-turquise"></span>
                      <p>Turquise</p>
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="colors">
                      <span className="color-lightblue"></span>
                      <p>Light blue</p>
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="colors">
                      <span className="color-brown"></span>
                      <p>Brown</p>
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="colors">
                      <span className="color-olive"></span>
                      <p>Olive</p>
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="colors">
                      <span className="color-armygreen"></span>
                      <p>Army green</p>
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="colors">
                      <span className="color-green"></span>
                      <p>Green</p>
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="colors">
                      <span className="color-grey"></span>
                      <p>Mint</p>
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="colors">
                      <span className="color-rust"></span>
                      <p>Rust</p>
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="colors">
                      <span className="color-orange"></span>
                      <p>Orange</p>
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="colors">
                      <span className="color-peach"></span>
                      <p>Peach</p>
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="colors">
                      <span className="color-yellow"></span>
                      <p>Yellow</p>
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="colors">
                      <span className="color-beige"></span>
                      <p>Beige</p>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="d-inline mx-2" autoClose="outside">
                  <Dropdown.Toggle id="dropdown-autoclose-outside">
                    Size <IoIosArrowDown className="downarrowicon" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="size">
                    <Dropdown.Item href="#" className="colors">
                      <p style={{ padding: "0px" }}>xxs</p>
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="colors">
                      <p style={{ padding: "0px" }}>xs</p>
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="colors">
                      <p
                        style={{ padding: "0px" }}
                        onClick={() => setSelect(!isSelect)}
                      >
                        {" "}
                        s{" "}
                        {isSelect && (
                          <i class="fa fa-check" aria-hidden="true"></i>
                        )}
                      </p>
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="colors">
                      <p style={{ padding: "0px" }}>m</p>
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="colors">
                      <p style={{ padding: "0px" }}>l</p>
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="colors">
                      <p style={{ padding: "0px" }}>xl</p>
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="colors">
                      <p style={{ padding: "0px" }}>xxl</p>
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="colors mb-4">
                      <p style={{ padding: "0px" }}>xxxl</p>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown className=" d-inline mx-2" autoClose={false}>
                  <Dropdown.Toggle id="dropdown-autoclose-false">
                    Price range <IoIosArrowDown className="downarrowicon" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="priceRange">
                    <Dropdown.Item>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginTop: "1rem",
                          marginBottom: "2rem",
                          fontWeight: 500,
                          fontSize: "12px",
                          color: "#000",
                        }}
                      >
                        <div>{`€${val.min}`}</div>
                        <div>{`€${val.max}`}</div>
                      </div>
                      <Range
                        values={values}
                        step={STEP}
                        min={MIN}
                        max={MAX}
                        onChange={(values) => {
                          setValues(values);
                        }}
                        renderTrack={({ props, children }) => (
                          <div
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            style={{
                              ...props.style,
                              height: "6px",
                              border: "2px solid",
                              display: "flex",
                              width: "100%",
                            }}
                          >
                            <div
                              ref={props.ref}
                              style={{
                                height: "5px",
                                width: "100%",
                                borderRadius: "4px",
                                alignSelf: "center",
                              }}
                            >
                              {children}
                            </div>
                          </div>
                        )}
                        renderThumb={({ props, isDragged }) => (
                          <div
                            {...props}
                            style={{
                              ...props.style,
                              height: "56px",
                              width: "56px",
                              borderRadius: "4px",
                              background: `url(${ClipIcon})`,
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              backgroundSize: "contain",
                            }}
                          ></div>
                        )}
                      />
                      <output style={{ marginTop: "30px" }} id="output">
                        {values[0].toFixed(1)} - {values[1].toFixed(1)}
                      </output>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            )}
          </div>
          <div>
            <p className="fw-bold d-sm-none d-lg-flex filtertext-category">
              Sort by:{" "}
              <u style={{ cursor: "pointer" }}>
                <p id="newcategory" onClick={() => setActive(!isActive)}>
                  Newest
                </p>
              </u>
            </p>
          </div>
        </div>
        {isActive && (
          <div className="d-none d-lg-flex listsorting">
            <ol className="justify p-3">
              {/* sort options based on backend api */}
              {result?.sortOptions?.data &&
                result?.sortOptions?.data.map((item) => {
                  return (
                    <>
                      <li className="sort-list" onClick={()=>changeSortOption(item.id)}>{item.label}</li>
                    </>
                  );
                })}
            </ol>
          </div>
        )}

        <ShirtSection products={products} />

        <p className="viewall-text fw-bold d-sm-block d-lg-none">
          <u style={{ cursor: "pointer" }}>View All</u>
        </p>
      </div>
    </section>
  );
}

export default MenCategoryProductSlider;
