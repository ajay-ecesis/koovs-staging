import React from "react";
import './footer.css';
import fbimg from '../../assets/images/fb.png';
import instaimg from '../../assets/images/instagram.png';
import twitterimg from '../../assets/images/twitter.png';
import youtubeimg from '../../assets/images/youtube.png';
import cardsimg from '../../assets/images/cards.png';
class Footer extends React.Component {
    render()
    {
    return(

        <footer className="footer-section">
         
            <div className="container-fluid">
                <div className="footer-content">
                    <div className="row py-lg-5 py-4">
                        <div className="col-xl-3 col-lg-4 col-12 pb-3 account">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <p>ACCOUNT</p>  
                                </div>
                                <ul>
                                    <li><a href="#">Orders and Returns</a></li>
                                    <li><a href="#">My Information </a></li>
                                    <li><a href="#">Wishlist </a></li>
                                    <li><a href="#">Sign In</a></li>
                                    <li><a href="#">Register</a></li>                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-12 pb-3 online">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <p>ONLINE SUPPORT</p>  
                                </div>
                                <ul>
                                    <li><a href="#">Contact </a></li>
                                    <li><a href="#">Size Guide </a></li>
                                    <li><a href="#">FAQs </a></li>
                                    <li><a href="#">Shipping and Return </a></li>
                                    <li><a href="#">Gift Card </a></li>     
                                    <li><a href="#">Privacy Policy  </a></li>
                                    <li><a href="#">Terms and Conditions </a></li>
                                    <li><a href="#">Cookie Settings </a></li>                                 
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-12 pb-3 connectkoovs">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <p>KOOVS</p>  
                                </div>
                                <ul>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Careers </a></li>
                                    <li><a href="#">Sustainability </a></li>                                   
                                </ul>
                            </div>
                            <div className="footer-widget d-block d-lg-none">
                                <div className="footer-widget-heading d-flex justify-content-between align-items-center">
                                    <p className="mb-0">CONNECT WITH KOOVS</p> 
                                    <div className="d-flex gap-3 justify-content-center">
                                        <img src={fbimg} className="img-fluid" alt="Koovs fb image"/>
                                        <img src={instaimg} className="img-fluid" alt="Koovs instagram image"/>
                                        <img src={twitterimg} className="img-fluid" alt="Koovs twitter image"/>
                                        <img src={youtubeimg} className="img-fluid" alt="Koovs youtube image"/>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-12 pb-3 signup">
                            <div className="footer-widget ">
                                <div className="footer-widget-heading">
                                    <p className="promotionheading">Sign up for email updates and promotions</p>  
                                </div>
                                <div className="emailaddress">
                                    <input type="email" className="form-control" id='floatingline'  placeholder="Email address" />
                                    <button type="button" className="submitfooter d-flex d-lg-none d-xl-none">Submit</button>
                                  
                                </div>
                                <p className="d-flex d-lg-none d-xl-none">Let us know what’s on your mind. Our customer service team would love to hear from you</p>
                            </div>
                        </div>
                    </div>
                   
                    <div className="row pb-1 pt-5 align-items-center">
                        <div className="col-xl-4 col-lg-4 col-md-12 order-1 order-lg-0">
                            <p className="mb-0 mb-content">© Koovs.com 2022. All rights reserved.</p>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 order-lg-1">
                            <div className="d-none d-lg-flex gap-3 justify-content-center">
                                <img src={fbimg} className="img-fluid" alt="Koovs fb image"/>
                                <img src={instaimg} className="img-fluid" alt="Koovs instagram image"/>
                                <img src={twitterimg} className="img-fluid" alt="Koovs twitter image"/>
                                <img src={youtubeimg} className="img-fluid" alt="Koovs youtube image"/>
                            </div>
                        </div>
                        <div className="socialmediacards col-xl-4 col-lg-4 col-md-12 order-0 order-lg-2">
                            <img src={cardsimg} className="img-fluid" alt="Koovs cards image"/>
                        </div>
                    </div>
                </div>
            </div>
            <hr id='floatingborder'/>
        </footer>
    )
    }
}

export default Footer;