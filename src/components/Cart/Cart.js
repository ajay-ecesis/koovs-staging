import React from "react";
import './cart.css';

class Cart extends React.Component {
    render()
    {
    return(

        <section className="cart">
            <div className="container-fluid">
                <div className="col-12">
                    <h5 className="py-4">Shopping Cart</h5>
                    <div className="w-75 mx-auto">
                        <p>
                            It appears that your cart is currently empty!<br/>
                            You can continue browsing here. 
                        </p>
                    </div>
                </div>
                <div className="col-12 mt-5">
                    <button className="btn btn-dark px-5 rounded-0 mx-auto d-flex">GO TO SHOP</button>
                </div>
            </div>
        </section>
      
    )
    }
}

export default Cart;


