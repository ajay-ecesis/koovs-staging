import React from "react";
import "./orderlist.css";
function OrdersList() {
    return (
        <section className="orders-section col-md-10 col-lg-10">
            <div className="pt-5">
                <h4>Track your orders, request or check your order history. </h4>

                <div className="order-tabs row gx-5 pt-5">
                    <div className="col">
                        <span className="active">Orders</span>
                        <span className="p-5">Returns</span>
                    </div>
                </div>
                <div className="order-tabs row  pt-sm-5">
                    <div className="col">
                        <span className="active">Order Date</span>
                        <span className="nav_item active">Order Number</span>
                        <span className="nav_item active">Status</span>
                    </div>

                    <div className=" pt-5">
                        <div className="order-content">
                            <div className="col">
                                <span className=""> 10-04-2020</span>
                                <span className="nav_item ">FT9G2Z</span>
                                <span className="nav_item ">Order closed</span>
                            </div>

                            <div className="row order-box">
                                <div className="col-6 order-items ">
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
                                <div className="col-6 order-shipping">
                                    <div className="col">
                                        <h5>Shipping</h5>
                                        <div className=" col amount-tab">
                                            <p className="address">Sofie Lund</p>
                                            <p className="address">Saltholmsvej 6, 5.</p>
                                            <p className="address">DK-2300 København S </p>
                                            <p className="address">Denmark</p>


                                            <div className="d-flex product-decription pt-5">
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



                        </div>
                    </div>

                    <div className="pt-4 pb-5">
                        <div className="col order-status-view">
                            <span className="">      10-02-2020</span>
                            <span className="nav_item ">XH8A1H</span>
                            <span className="nav_item ">Order closed</span>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}

export default OrdersList;
