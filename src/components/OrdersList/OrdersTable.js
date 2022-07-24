import React, { useState } from 'react'
import './orderstable.css';
import { Table } from 'react-bootstrap';
import OrdersList from './OrdersList';
const OrdersTable = () => {

    const [ordersview, setOrdersview] = useState();
    return (
        <>
            {/* <section className='col-lg-8 col-xl-8 col-sm-12'>
                <Table className="row orders-table-section"> */}
            <tr className='table-ordercontents' onClick={() => setOrdersview(!ordersview)} >
                <td colspan="3">
                    <table className='w-100'>
                        <tr>
                            <td >10-02-2020</td>
                            <td >XH8A1H</td>
                            <td>Order closed</td>
                        </tr>
                        <tr>
                            <td colspan="3">
                                {!ordersview && <OrdersList />}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>

            <tr className='table-ordercontents'>
                <td > 10-02-2020</td>
                <td >XH8A1H</td>
                <td >Order closed</td>

            </tr>
            {/* </Table>
            </section> */}

        </>
    )
}

export default OrdersTable