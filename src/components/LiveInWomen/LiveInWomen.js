import React from "react";
import koovsvideoicon from "../../assets/images/playbutton.png";
import videowomenpage from "../../assets/images/womenliveimg.png";
import comingsoon from "../../assets/images/comingsoonmenpage.png";
import { Carousel } from 'react-bootstrap';
import "./liveinwomen.css";

const LiveInWomen = () => {
  return (
    <>
      <section className="liveinwomen">
        <div className="container-fluid">
          <div className="row carousel-live">
            <div className=" live-mohammed col-12 col-lg-6">
              <div className="LiveMen">
                <p className="fw-bold d-none d-lg-block ">GO LIVE WITH US</p>
              </div>
              <div className="d-none d-lg-block">
                <div className="text-live justify-content-between">
                  <span className="timing-text">4 days ago</span>
                </div>
                <img
                  alt="video-men"
                  src={videowomenpage}
                  className="w-100 img-fluid"
                />
                <button
                  type="button"
                  id="play_button"
                  className="video-play-button"
                >
                  <span>
                    <img alt="video play icon" src={koovsvideoicon} />
                  </span>
                </button>
              </div>

              <div className="d-block d-lg-none">
                <Carousel controls={true} interval={700}>
                  <Carousel.Item>
                    <div className="banner-Image"><img src={videowomenpage} className="w-100 img-fluid" alt="DMG banner Image" /></div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="banner-Image"><img src={videowomenpage} alt="DMG banner Image" className="w-100 img-fluid" /></div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="banner-Image"><img src={videowomenpage} alt="DMG banner Image" className="w-100 img-fluid" /></div>
                  </Carousel.Item>
                </Carousel>
              </div>

              <div className="Heading-live">
                <h5 className="fw-bold">Live with Mohammed</h5>

                <p className="fw-bold para-live ">
                  Spend the afternoon with creative,Mohammed,as he Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>

                <button className="Live-button btn btn-light btn-outline-dark rounded-0">
                  WATCH AND SHOP
                </button>
              </div>
            </div>

            <div className=" live-bobby col-12 col-lg-6 d-none d-lg-block">
              <div className="text-live d-flex justify-content-between">
                <span className="timing-text">In 7 days</span>
              </div>
              <img
                alt="coming-soon"
                src={comingsoon}
                className="w-100 img-fluid"
              />
              
              <button
                type="button"
                id="coming-soon"
                className="coming-soon-button"
              >
                <span>Coming Soon</span>
              </button>
           
              <div className="Heading-live">
                <h5 className="fw-bold">Live with Bobbi and Holly/April 29</h5>

                <p className="fw-bold bobby-live">
                  Spend the afternoon with bobbi and Holly as they Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <button className="Live-button btn btn-light btn-outline-dark rounded-0">
                  ADD TO CALENDER
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LiveInWomen;
