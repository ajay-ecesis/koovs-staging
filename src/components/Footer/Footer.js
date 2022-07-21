import React from "react";
import './footer.css';
import fbimg from '../../assets/images/fb.png';
import instaimg from '../../assets/images/instagram.png';
import twitterimg from '../../assets/images/twitter.png';
import youtubeimg from '../../assets/images/youtube.png';
import cardsimg from '../../assets/images/cards.png';
import { Link } from "react-router-dom";
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
                                    <li><a href="#"><Link to="/orders-and-returns"> Orders and Returns</Link></a></li>
                                    <li><a href="#"><Link to="/account"> My Information </Link></a></li>
                                    <li><a href="#"><Link to="/wishlist">Wishlist </Link></a></li>
                                    <li><a href="#"><Link to="/user/signin">Sign In</Link></a></li>
                                    <li><a href="#"><Link to="/user/register">Register</Link></a></li>                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-12 pb-3 online">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <p>ONLINE SUPPORT</p>  
                                </div>
                                <ul>
                                    <li><a href="#"><Link to="/contact">Contact </Link></a></li>
                                    <li><a href="#"><Link to="/size-guide">Size Guide </Link></a></li>
                                    <li><a href="#"><Link to="/faq">FAQs</Link></a></li>
                                    <li><a href="#"><Link to="/orders-and-returns">Shipping and Return </Link></a></li>
                                    <li><a href="#"><Link to="/gift-card">Gift Card</Link> </a></li>     
                                    <li><a href="#"><Link to="/privacy-policy">Privacy Policy </Link> </a></li>
                                    <li><a href="#"><Link to="/terms-and-conditions">Terms and Conditions </Link></a></li>
                                    <li><a href="#"><Link to="/cookie-settings">Cookie Settings</Link> </a></li>                                 
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
                            <a target="_blank" href="https://www.facebook.com/koovs" style={{cursor:"pointer"}}>  <img src={fbimg} className="img-fluid" alt="Koovs fb image"/></a>
                            <a target="_blank" href="https://www.instagram.com/koovsfashion" style={{cursor:"pointer"}}>    <img src={instaimg} className="img-fluid" alt="Koovs instagram image" style={{cursor:"pointer"}}/></a>
                            <a target="_blank" href="https://twitter.com/mykoovs" style={{cursor:"pointer"}}>   <img src={twitterimg} className="img-fluid" alt="Koovs twitter image" style={{cursor:"pointer"}}/></a>
                            <a target="_blank" href="https://www.youtube.com/user/Koovsdotcom" style={{cursor:"pointer"}}>     <img src={youtubeimg} className="img-fluid" alt="Koovs youtube image" style={{cursor:"pointer"}}/></a>
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