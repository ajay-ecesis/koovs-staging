import React from 'react'

const NotSignedWishlist = () => {
  return (
    <>
    <section className="wishlistnoitems-section">
         <p className='noitems-heading d-sm-block d-lg-none'>Wishlist</p>
         <p>
             Save your favourite items to start building your wishlist.
         </p>
         <div className='get-inspired d-flex'>
             <button type="button" className='getinspiredbutton'>GET INSPIRED</button>
         </div>
     </section>
 </>
  )
}

export default NotSignedWishlist