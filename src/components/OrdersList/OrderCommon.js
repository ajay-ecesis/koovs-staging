import React, { useState } from 'react';
import './ordercommon.css';
import { Table } from 'react-bootstrap';
import OrdersTable from './OrdersTable';
import ReturnsTable from './ReturnsTable';

const OrderCommon = () => {

    const [isreturn, setReturn] = useState(false);
    const [isorder, setOrder] = useState(true);

    function toggleMenu(menu) {
        if (menu == "orders") {
            setOrder(true)
            setReturn(false)
        }
        else {
            setOrder(false)
            setReturn(true)
        }

    }
    return (
        <>
            <section className="table-section col-md-10 col-lg-10 col-sm-12">
                <h5 className='mobile-mainorder d-sm-block d-lg-none d-xl-none'>Orders and Returns</h5>
                <div className="heading-track">
                    {isorder && <h6>Track your orders, request or check your order history. </h6>}
                    {isreturn && <h6>Check the progress of your returns, reschedule collection and print your return documents. </h6>}

                    <div className="order-heading row gx-5 ">
                        <div className="returnsandorders col-lg-8 col-sm-6">
                            <span className={`not-active ${isorder && "active"}`} onClick={() => toggleMenu("orders")}>Orders</span>
                            <span className={`not-active ${isreturn && "active"} `} onClick={() => toggleMenu("returns")}>Returns</span>
                        </div>
                    </div>


                    <div className='col-lg-9 col-md-8'>

                    {/* <Table className="table-order row pt-lg-3 pt-sm-5">

<tr className='orderdate-heading'>
    <th className=" order-headingtable  col-sm-4 col-xl-2 col-lg-2">Order Date</th>
    <th className=" order-headingtable order-number col-sm-4 col-xl-2 col-lg-2">Order Number</th>
    <th className=" order-headingtable order-status  col-sm-4 col-xl-2 col-lg-2">Status</th>
</tr>
   {isorder && <OrdersTable />}

</Table> */}

<table className="w-100">
<tr>
    <th >Order Date</th>
    <th >Order Number</th>
    <th >Status</th>
</tr>
   {isorder && <OrdersTable />}

</table>
                    </div>
                   
{/* 
<div className='d-flex'>

<p>Order Date</p>

<p>Order Number</p>

<p>Status</p>
</div> */}
                </div>
            </section>

         
            {isreturn && <ReturnsTable />}

        </>
    )
}

export default OrderCommon