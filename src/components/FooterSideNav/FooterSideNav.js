import React, { useEffect, useState } from "react";
import "./footersidenav.css";
import Contact from "../OnlineSupport/Contact";
import Faqs from "../OnlineSupport/Faqs";
import SizeSupport from "../OnlineSupport/SizeSupport";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Shipping from "../OnlineSupport/Shipping";
import GiftCard from "../OnlineSupport/GiftCard";
import Privacy from "../OnlineSupport/Privacy";
import Terms from "../OnlineSupport/Terms";
import Cookie from "../OnlineSupport/Cookie";
import { Link } from "react-router-dom";

const FooterSideNav = ({ page }) => {
  const [sidebar, setSidebar] = useState(false);
  const [tabOption,setTabOption]=useState(true)

  useEffect(()=>{
setTabOption(page)
  },[])

  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <div
            className={
              "account-actions col-12 col-sm-12 col-lg-3 col-xl-3  " +
              (sidebar ? "online-hide" : "")
            }
          >
            <div className="online-supportmobile">
              <h4 className="onlinesupport-mobileheading">ONLINE SUPPORT</h4>
            </div>
            <div className="account-nav">
              <Nav className="flex-column sidebarlist">
                <Nav.Item>
              <Link to ="/contact" style={{textDecoration:"none"}}>   <Nav.Link
                    onClick={() => {
                      setSidebar(true);
                    }}
                    eventKey="tabOne"
                    className={`${page=="contact"&&"active"}`}
                  >
                    Contact
                  </Nav.Link></Link> 
                </Nav.Item>
                <Nav.Item>
                <Link to ="/size-guide" style={{textDecoration:"none"}}>  <Nav.Link
                    onClick={() => {
                      setSidebar(true);
                    }}
                    eventKey="second"
                    className={`${page=="size-guide"&&"active"}`}
                  >
                    Size Guide
                  </Nav.Link></Link>
                </Nav.Item>
                <Nav.Item>
                <Link to ="/faq" style={{textDecoration:"none"}}>  <Nav.Link
                    onClick={() => {
                      setSidebar(true);
                    }}
                    className={`${page=="faq"&&"active"}`}
                    eventKey="third"
                  >
                    FAQs
                  </Nav.Link></Link>
                </Nav.Item>
                <Nav.Item>
                <Link to ="/orders-and-returns" style={{textDecoration:"none"}}>  <Nav.Link
                    onClick={() => {
                      setSidebar(true);
                    }}
                    className={`${page=="orders-and-returns"&&"active"}`}
                    eventKey="fourth"
                  >
                    Shipping and Return
                  </Nav.Link></Link>
                </Nav.Item>
                <Nav.Item>
                <Link to ="/gift-card" style={{textDecoration:"none"}}>  <Nav.Link
                    onClick={() => {
                      setSidebar(true);
                    }}
                    eventKey="fifth"
                    className={`${page=="gift-card"&&"active"}`}
                  >
                    Gift Card
                  </Nav.Link></Link>
                </Nav.Item>
               <Nav.Item>
               <Link to ="/privacy-policy" style={{textDecoration:"none"}}>    <Nav.Link
                    onClick={() => {
                      setSidebar(true);
                    }}
                    className={`${page=="privacy-policy"&&"active"}`}
                    eventKey="sixth"
                  >
                    Privacy Policy
                  </Nav.Link></Link>
                </Nav.Item>
              <Nav.Item>
              <Link to ="/terms-and-conditions" style={{textDecoration:"none"}}>      <Nav.Link
                    onClick={() => {
                      setSidebar(true);
                    }}
                    className={`${page=="terms-and-conditions"&&"active"}`}
                    eventKey="seventh"
                  >
                    Terms and conditions
                  </Nav.Link></Link>
                </Nav.Item>
                <Nav.Item>
                <Link to ="/cookie-settings" style={{textDecoration:"none"}}>    <Nav.Link
                    onClick={() => {
                      setSidebar(true);
                    }}
                    eventKey="eighth"
                    className={`${page=="cookie-settings"&&"active"}`}
                  >
                    Cookie Settings
                  </Nav.Link></Link>
                </Nav.Item>
              </Nav>
            </div>
          </div>
          <section
            className={
              "col-12 col-sm-12 col-lg-8 col-xl-8 " +
              (sidebar ? "" : "online-hide")
            }
          >
            <Tab.Content>
              <Tab.Pane eventKey="tabOne"   className={`${page=="contact"&&"active show"}`}>
                <Contact />
              </Tab.Pane>
              <Tab.Pane eventKey="second"   className={`${page=="size-guide"&&"active show"}`}>
                <SizeSupport />
              </Tab.Pane>
              <Tab.Pane eventKey="third"   className={`${page=="faq"&&"active show"}`}>
                <Faqs />
              </Tab.Pane>
              <Tab.Pane eventKey="fourth"   className={`${page=="orders-and-returns"&&"active show"}`}>
                <Shipping />
              </Tab.Pane>
              <Tab.Pane eventKey="fifth"   className={`${page=="gift-card"&&"active show"}`}>
                <GiftCard />
              </Tab.Pane>
              <Tab.Pane eventKey="sixth"   className={`${page=="privacy-policy"&&"active show"}`}>
                <Privacy />
              </Tab.Pane>
              <Tab.Pane eventKey="seventh"   className={`${page=="terms-and-conditions"&&"active show"}`}>
                <Terms />
              </Tab.Pane>
              <Tab.Pane eventKey="eighth"   className={`${page=="cookie-policy"&&"active show"}`}>
                <Cookie />
              </Tab.Pane>
            </Tab.Content>
          </section>
        </Row>
      </Tab.Container>
    </>
  );
};

export default FooterSideNav;
