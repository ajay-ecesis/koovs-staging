import React, { useState } from 'react';
import "./footersidenav.css";
import Contact from '../OnlineSupport/Contact';
import Faqs from '../OnlineSupport/Faqs';
import SizeSupport from '../OnlineSupport/SizeSupport';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Shipping from '../OnlineSupport/Shipping';
import GiftCard from '../OnlineSupport/GiftCard';
import Privacy from '../OnlineSupport/Privacy';
import Terms from '../OnlineSupport/Terms';
import Cookie from '../OnlineSupport/Cookie';



const FooterSideNav = () => {

    const [sidebar, setSidebar] = useState(false);
   

    return (
        <>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <div className={"account-actions col-12 col-sm-12 col-lg-3 col-xl-3  " + (sidebar ? "online-hide" : "")}>
                        <div className='online-supportmobile'>
                            <h4 className='onlinesupport-mobileheading'>ONLINE SUPPORT</h4>
                        </div>
                        <div className='account-nav'>
                        <Nav className="flex-column sidebarlist">
                            <Nav.Item>
                                <Nav.Link onClick={() => { setSidebar(true) }} eventKey="first">Contact</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => { setSidebar(true) }} eventKey="second">Size Guide</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => { setSidebar(true) }} eventKey="third">FAQs</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => { setSidebar(true) }} eventKey="fourth">Shipping and Return</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => { setSidebar(true) }} eventKey="fifth">Gift Card</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => { setSidebar(true) }} eventKey="sixth">Privacy Policy</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => { setSidebar(true) }} eventKey="seventh">Terms and conditions</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => { setSidebar(true) }} eventKey="eighth">Cookie Settings</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </div>
                    </div>
                    <section className={'col-12 col-sm-12 col-lg-8 col-xl-8 '+ (sidebar ? "" : "online-hide")}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Contact />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                               <SizeSupport/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                               <Faqs/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                               <Shipping/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                               <GiftCard/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="sixth">
                               <Privacy/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="seventh">
                               <Terms/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="eighth">
                               <Cookie/>
                            </Tab.Pane>
                        </Tab.Content>
                    </section>
                </Row>
            </Tab.Container>
        </>
    )
}

export default FooterSideNav