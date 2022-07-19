import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import ReturnList from './ReturnList';

const ReturnsTable = () => {

  const [returnsview, setReturnsview] = useState();
  return (
    <>
    <section className='col-lg-8 col-xl-8 col-sm-12'>
    <Table className="row">

        <tr className='table-ordercontents' onClick={() => setReturnsview(!returnsview)}>

            <td className="col-lg-2  col-sm-4">10-02-2020</td>
            <td className="col-sm-4 col-lg-2">F29G2Z</td>
            <td className=" col-sm-4 col-lg-2">Order returned</td>
            {!returnsview && <ReturnList />}
        </tr>

        </Table>
        </section>
  
</>
  )
}

export default ReturnsTable