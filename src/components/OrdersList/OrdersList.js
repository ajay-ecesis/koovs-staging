import React from "react";
import "./orderlist.css";
function OrdersList() {
    return (
        
        <section className="orders-section col-sm-12 col-md-10 col-lg-10">
                <div className="order-tabs  pt-sm-5">    
                    <div className="pt-3">
                        <div className="order-content"> 
                            <div className="row order-box">
                            <p className='lorem-text d-sm-block d-lg-none d-xl-none'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className="col-lg-6 col-xl-6 col-sm-12 col-xs-12 order-items ">
                                    <div className="col">
                                        <h5>Items</h5>
                                        <p>RX MOC 3.0 Advanced - UK 6 </p>
                                        <div className=" row amount-tab">
                                            <div className="d-flex product-decription">
                                                <p>Products</p>
                                                <p className="price">450 DKK</p>
                                            </div>
                                            <div className="d-flex product-decription">
                                                <p>Shipping</p>
                                                <p className="price">450 DKK</p>
                                            </div>
                                            <div className="d-flex product-decription">
                                                <p>Order Total</p>
                                                <p className="price">450 DKK</p>
                                            </div>
                                            <div className="d-flex product-decription">
                                                <p>Including VAT (25%)</p>
                                                <p className="price">450 DKK</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-6 col-sm-12 order-shipping">
                                    <div className="col">
                                        <h5>Shipping</h5>
                                        <div className=" col amount-tab">
                                            <p className="address">Sofie Lund</p>
                                            <p className="address">Saltholmsvej 6, 5.</p>
                                            <p className="address">DK-2300 København S </p>
                                            <p className="address">Denmark</p>
<div className="shipping-order-text">
                                            <div className="d-flex product-decription">
                                                <p>Shipping Method</p>
                                                <p className="price">Pickup Point</p>
                                            </div>
                                            <div className="d-flex product-decription">
                                                <p>Payment Method</p>
                                                <p className="price">Apple Pay</p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="create-return">
                                    <p>
                                        <u>create return</u>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
        </section>
     
    );
}

export default OrdersList;
