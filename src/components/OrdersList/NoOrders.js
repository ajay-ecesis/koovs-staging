import React, { useState } from 'react';
import OrderCommon from './OrderCommon';
import './noorders.css';

const NoOrders = () => {

    const [isreturn, setReturn] = useState(false);
    const [isorder, setOrder] = useState(false);

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
   
   
           <section className="noorders-section">
          
                <h4 className='mobile-mainorder d-sm-block d-lg-none d-xl-none fw-bold'>Orders and Returns</h4>
                <div className="heading-track">
                    {isorder && <h5 className='fw-bold'>Track your orders, request or check your order history. </h5>}
                    {isreturn && <h5 className='fw-bold'>Check the progress of your returns, reschedule collection and print your return documents. </h5>}  
                </div>
                <div className="order-heading row gx-5 ">
                        <div className="returnsandorders col-lg-8 col-sm-6">
                            <span className={`not-active ${isorder&& "active"}`} onClick={() => toggleMenu("orders")}>Orders</span>
                            <span className={`not-active ${isreturn&& "active"} `} onClick={() => toggleMenu("returns")}>Returns</span>
                        </div>
                    </div>


                {isorder &&  <div className='noorders'>
                <p className=''>
                   You currently have no orders.
                </p>
                <div className='goto-shop d-flex'>
                    <button type="button" className='goto-shopbutton'>GOTO SHOP</button>
                </div>
                </div>}

                {isreturn &&  <div className='noreturns'>
                <p className='fw-bold'>
                   You currently have no returns.
                </p>
                <p>You can start a return request from the order tracker.</p>
                <div className='goto-shop d-flex'>
                    <button type="button" className='goto-shopbutton'>VIEW ORDERS</button>
                </div>
                </div>}

            </section>
       
    </>
  )
}

export default NoOrders