import React, { useState } from "react";
import "./maincategoryproductslider.css";
import "react-multi-carousel/lib/styles.css";
import productItem from "../../assets/images/shirts.png";
import shoppingbag from "../../assets/images/Shopping-bag.png";
import filterIcon from "../../assets/images/filtericon.png";
import Dropdown from 'react-bootstrap/Dropdown';
import { IoIosArrowDown } from 'react-icons/io';
import InputRange from "react-input-range";

function MenCategoryProductSlider() {
    const [isActive, setActive] = useState(false);
    const [isShow, setShow] = useState(false);
    const [isSelect, setSelect] = useState(false);
    const [val, setVal] = React.useState({ min: 0, max: 100 });


    return (
        <section className="Maincategory_product_slider">
            <div className="container-fluid">
                <div className="actions justify-content-between d-none d-lg-flex">
                    <div className="d-flex filtertext-category" style={{ cursor: "pointer" }}>
                        <p className="fw-bold"> Filter</p>
                        <img src={filterIcon} onClick={() => setShow(!isShow)}></img>

                        {isShow && <div className="d-none d-lg-flex">

                            <Dropdown className="dropdown-text d-inline mx-2">
                                <Dropdown.Toggle id="dropdown-autoclose-true">
                                    Brand <IoIosArrowDown style={{ color: "#878787" }} />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Header className="dropdown-header">A  </Dropdown.Header>
                                    <Dropdown.Item href="#" className="items" onClick={() => setSelect(!isSelect)}>Adidas {isSelect && <i class="fa fa-check" aria-hidden="true"></i>}</Dropdown.Item>
                                    <Dropdown.Item href="#" className="items" >Affend </Dropdown.Item>
                                    <Dropdown.Item href="#" style={{ padding: "0px" }} className="" >All reaons </Dropdown.Item>

                                    <Dropdown.Header className="dropdown-header">B</Dropdown.Header>
                                    <Dropdown.Item href="#" className="items">Billaborg</Dropdown.Item>
                                    <Dropdown.Item href="#" className="items">Brave</Dropdown.Item>
                                    <Dropdown.Item href="#" style={{ padding: "0px" }} className="">Burton</Dropdown.Item>

                                    <Dropdown.Header className="dropdown-header">C</Dropdown.Header>
                                    <Dropdown.Item href="#" style={{ padding: "0px" }} className="">Ci</Dropdown.Item>

                                    <Dropdown.Header className="dropdown-header">D</Dropdown.Header>
                                    <Dropdown.Item href="#" className="items">Degree</Dropdown.Item>
                                    <Dropdown.Item href="#" className="items">DIWAAH</Dropdown.Item>


                                    <Dropdown.Header className="dropdown-header">E</Dropdown.Header>

                                    <Dropdown.Item href="#" className="items">Elisa</Dropdown.Item>
                                    <Dropdown.Item href="#" className="items">Erika</Dropdown.Item>
                                    <Dropdown.Item href="#" style={{ padding: "0px" }} className="">Exolloxo</Dropdown.Item>

                                    <Dropdown.Header className="dropdown-header">F</Dropdown.Header>
                                    <Dropdown.Item href="#" className="items">Freakins</Dropdown.Item>
                                    <Dropdown.Item href="#" style={{ padding: "0px" }} className="">Freakins Unt.</Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className="d-inline mx-2" autoClose="inside">
                                <Dropdown.Toggle id="dropdown-autoclose-inside">
                                    Color <IoIosArrowDown style={{ color: "#878787" }} />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>

                                    <Dropdown.Item href="#" className="colors" >
                                        <span className="color-black"></span>
                                        <p>Black</p>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className="colors" >
                                        <span className="color-grey"></span>
                                        <p>Grey</p>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className="colors" >
                                        <span className="color-lightgrey"></span>
                                        <p>Light grey</p>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className="colors" >
                                        <span className="color-multi"></span>
                                        <p>Multi</p>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className="colors" >
                                        <span className="color-navy"></span>
                                        <p>Navy</p>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className="colors" >
                                        <span className="color-petroleum"></span>
                                        <p>Petroleum</p>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className="colors" >
                                        <span className="color-blue"></span>
                                        <p>Blue</p>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className="colors" >
                                        <span className="color-turquise"></span>
                                        <p>Turquise</p>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className="colors" >
                                        <span className="color-lightblue"></span>
                                        <p>Light blue</p>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className="colors" >
                                        <span className="color-brown"></span>
                                        <p>Brown</p>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className="colors" >
                                        <span className="color-olive"></span>
                                        <p>Olive</p>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className="colors" >
                                        <span className="color-armygreen"></span>
                                        <p>Army green</p>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className="colors" >
                                        <span className="color-green"></span>
                                        <p>Green</p>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className="colors" >
                                        <span className="color-grey"></span>
                                        <p>Mint</p>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className="colors" >
                                        <span className="color-rust"></span>
                                        <p>Rust</p>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className="colors" >
                                        <span className="color-orange"></span>
                                        <p>Orange</p>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className="colors" >
                                        <span className="color-peach"></span>
                                        <p>Peach</p>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className="colors" >
                                        <span className="color-yellow"></span>
                                        <p>Yellow</p>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className="colors" >
                                        <span className="color-beige"></span>
                                        <p>Beige</p>
                                    </Dropdown.Item>


                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className="d-inline mx-2" autoClose="outside">
                                <Dropdown.Toggle id="dropdown-autoclose-outside">
                                    Size <IoIosArrowDown style={{ color: "#878787" }} />
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="size">
                                    <Dropdown.Item href="#" className="colors" >

                                        <p style={{ padding: "0px" }}>xxs</p>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className="colors" >

                                        <p style={{ padding: "0px" }}>xs</p>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className="colors" >

                                        <p style={{ padding: "0px" }}> s</p>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className="colors" >

                                        <p style={{ padding: "0px" }}>m</p>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className="colors" >

                                        <p style={{ padding: "0px" }}>l</p>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className="colors" >

                                        <p style={{ padding: "0px" }}>xl</p>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className="colors" >

                                        <p style={{ padding: "0px" }}>xxl</p>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className="colors mb-4"  >

                                        <p style={{ padding: "0px" }}>xxxl</p>
                                    </Dropdown.Item>

                                </Dropdown.Menu >
                            </Dropdown>

                            <Dropdown className="d-inline mx-2" autoClose={false}>
                                <Dropdown.Toggle id="dropdown-autoclose-false">
                                    Price range <IoIosArrowDown style={{ color: "#878787" }} />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <InputRange
                                            step={2}
                                            formatLabel={value => null}
                                            draggableTrack={false}
                                            allowSameValues={false}
                                            maxValue={100}
                                            minValue={0}
                                            value={val}
                                            onChange={setVal}
                                            onChangeComplete={args => console.log(args)}
                                        />
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                marginTop: "1rem",
                                                fontWeight: 500,
                                                color: "#000"
                                            }}
                                        >
                                            <div>{`€${val.min}`}</div>
                                            <div>{`€${val.max}`}</div>
                                            </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        }
                    </div>
                    <div>
                        <p className="fw-bold d-sm-none d-lg-flex filtertext-category">
                            Sort by: <u style={{ cursor: "pointer" }}><p id='newcategory' onClick={() => setActive(!isActive)}>Newest</p></u>
                        </p>
                    </div>
                </div>
                {isActive && <div className="d-none d-lg-flex listsorting">

                    <ol className="justify p-3">
                        <li className="sort-list">Newest</li>
                        <li className="sort-list">Name(a to z)</li>
                        <li className="sort-list">Name(z to a)</li>
                        <li className="sort-list">price(lowest to highest)</li>
                        <li className="sort-list">price(highest to lowest)</li>
                    </ol>
                </div>}


                {/* <div className="">
                    <p className="fw-bold d-flex d-lg-none mt-3 justify-content-center">
                        <u style={{ cursor: "pointer" }}>View less</u>
                    </p>
                </div> */}

                <div class="row image-color mt-3">
                    <div class="shirt-col col-xl-3  col-lg-3  col-sm-6  col-6"> <div className="text-category">

                        <div className="favIcon me-2 ">
                            <label for="heart"><i class="fa fa-heart-o" aria-hidden="true"></i></label>
                        </div>
                        <div className='prod1'>
                            <img src={productItem} className="img-fluid" alt="Koovs product Front image" />
                            <div className='shop-icon d-sm-block d-lg-none d-xl-none'><img src={shoppingbag} /></div>
                            <div className="preview-color">
                                <input className='blue' name='color' type='radio' />
                                <input className='yellow' name='color' type='radio' />
                                <input className='white' name='color' type='radio' />
                            </div>
                        </div>

                        <div className='product-description d-flex justify-content-between px-3'>
                            <div className='prodDetail-text'>
                                <p className="fw-bold">Brand</p>
                                <p>Patch Pocket Jacket</p>
                            </div>
                            <div className='prodDetail-text'>
                                <p>₹930</p>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div class="shirt-col col-xl-3  col-lg-3  col-sm-6  col-6"> <div className="text-category">
                        <div>
                            <div className="favIcon me-2">
                                <label for="heart"><i className="fa fa-heart-o" aria-hidden="true"></i></label>
                            </div>
                        </div>
                        <div> <img src={productItem} className="img-fluid" alt="Koovs product Front image" /></div>
                        <div className='shop-icon d-sm-block d-lg-none d-xl-none'><img src={shoppingbag} /></div>
                        <div className="preview-color">
                            <input className='darkblue' name='color' type='radio' />
                            <input className='skyblue' name='color' type='radio' />
                            <input className='blue' name='color' type='radio' />
                            <input className='yellow' name='color' type='radio' />
                            <input className='white' name='color' type='radio' />
                        </div>
                        <div className='product-description d-flex justify-content-between px-3'>

                            <div className='prodDetail-text'>
                                <p className="fw-bold">Brand</p>
                                <p>Patch Pocket Jacket</p>
                            </div>
                            <div className='prodDetail-text'>
                                <p>₹930</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="shirt-col col-xl-3  col-lg-3  col-sm-6  col-6"> <div className="text-category">

                        <div>
                            <div className="favIcon me-2">
                                <label for="heart"><i class="fa fa-heart-o" aria-hidden="true"></i></label>
                            </div>
                        </div>
                        <div> <img src={productItem} className="img-fluid" alt="Koovs product Front image" /></div>
                        <div className='shop-icon d-sm-block d-lg-none d-xl-none'><img src={shoppingbag} /></div>
                        <div className="preview-color">
                            <input className='pink' name='color' type='radio' />
                            <input className='blue' name='color' type='radio' />
                            <input className='yellow' name='color' type='radio' />
                            <input className='white' name='color' type='radio' />
                        </div>
                        <div className='product-description d-flex justify-content-between px-3'>
                            <div className='prodDetail-text'>
                                <p className="fw-bold">Brand</p>
                                <p>Patch Pocket Jacket</p>
                            </div>
                            <div className='prodDetail-text'>
                                <p>₹930</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="shirt-col col-xl-3  col-lg-3  col-sm-6  col-6"> <div className="text-category">
                        {/* <div className='new'><span>new in</span></div> */}
                        <div>

                            <div className="favIcon me-2">
                                <label for="heart"><i class="fa fa-heart-o" aria-hidden="true"></i></label>
                            </div>
                        </div>
                        <div> <img src={productItem} className="img-fluid" alt="Koovs product Front image" /></div>
                        <div className='shop-icon d-sm-block d-lg-none d-xl-none'><img src={shoppingbag} /></div>
                        <div className="preview-color">
                            <input className='blue' name='color' type='radio' />
                            <input className='yellow' name='color' type='radio' />
                            <input className='white' name='color' type='radio' />
                        </div>
                        <div className='product-description d-flex justify-content-between px-3'>
                            <div className='prodDetail-text'>
                                <p className="fw-bold">Brand</p>
                                <p>Patch Pocket Jacket</p>
                            </div>
                            <div className='prodDetail-text'>
                                <p>₹930</p>
                            </div>
                        </div>
                    </div>
                    </div>

                    <p className="viewall-text fw-bold d-sm-block d-lg-none">
                        <u style={{ cursor: "pointer" }}>View All</u>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default MenCategoryProductSlider;
