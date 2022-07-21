import React from 'react';
import './contact.css';

const GiftCard = () => {
    return (
        <section className='contact col-12 col-sm-12 col-lg-8 col-xl-8'>
            <h5 className='contact-mobile d-lg-none d-xl-none d-sm-block'>Gift Card</h5>
            <div className='contact-text'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>


                <p className='looking-text'>Can’t find what you are looking for?</p>

                <div className='contact-button'>
                    <button type='button' className='contactusbtn' style={{fontSize:"9px"}}>CHECK MY GIFTCARD BALANCE</button>
                </div>

            </div>
        </section>
    )
}

export default GiftCard