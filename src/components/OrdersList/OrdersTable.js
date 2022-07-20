import React, { useState } from 'react'
import './orderstable.css';
import { Table } from 'react-bootstrap';
import OrdersList from './OrdersList';
const OrdersTable = () => {

    const [ordersview, setOrdersview] = useState();
    return (
        <>
            <section className='col-lg-8 col-xl-8 col-sm-12'>
                <Table className="row">
                    <tr className='table-ordercontents' onClick={() => setOrdersview(!ordersview)} >
                       
                        <td className="col-sm-4 col-lg-2 ">10-02-2020</td>
                        <td className="col-sm-4 col-lg-2">XH8A1H</td>
                        <td className=" col-sm-4 col-lg-2">Order closed</td>
                       
                        {!ordersview && <OrdersList />}
                    </tr>
                    <tr className='table-ordercontents'>
                        <td className="col-sm-4 col-lg-2"> 10-02-2020</td>
                        <td className="col-sm-4 col-lg-2 ">XH8A1H</td>
                        <td className="col-sm-4 col-lg-2">Order closed</td>
                    </tr>
                </Table>
            </section>

        </>
    )
}

export default OrdersTable