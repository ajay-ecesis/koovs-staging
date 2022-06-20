import React from "react";
import { Carousel } from "react-bootstrap";
import menbannerimg from "../../assets/images/menbannerimg.png";
import MenBannerimg1 from "../../assets/images/MenBannerimg1.png";
import "./menbanner.css";
import LazyLoad from "react-lazy-load";

const MenBanner = () => {
  return (
    <section className="men-banner">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-6">
          <LazyLoad offsetTop={200}>
              <Carousel controls={true} interval={3000}>
                <Carousel.Item>
                  <div className="carousel-heading">
                    <p className="fw-bold">Casual cool</p>
                    <p>Explore the new collection...</p>
                  </div>
                  <div className="Menbanner-Image">
                    <img
                      src={MenBannerimg1}
                      className="w-100 img-fluid"
                      alt="DMG banner Image"
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="carousel-heading">
                    <p className="fw-bold">Casual cool</p>
                    <p>Explore the new collection...</p>
                  </div>
                  <div className="Menbanner-Image">
                    <img
                      src={MenBannerimg1}
                      alt="Koovs banner Image"
                      className="w-100 img-fluid"
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="carousel-heading">
                    <p className="fw-bold">Casual cool</p>
                    <p>Explore the new collection...</p>
                  </div>
                  <div className="Menbanner-Image">
                    <img
                      src={MenBannerimg1}
                      alt="Koovs banner Image"
                      className="w-100 img-fluid"
                    />
                  </div>
                </Carousel.Item>
              </Carousel>
            </LazyLoad>
          </div>
          <div className="col-12 col-lg-6  d-none d-lg-block">
            <div className="category-carousel">
              <div className="text-menbanner d-flex justify-content-between">
                <p>Influencer Collections</p>
                <p>
                  <u style={{ cursor: "pointer" }}>View All</u>
                </p>
              </div>
              <img
                src={menbannerimg}
                alt="Koovs banner Image"
                className="w-100 img-fluid"
              />
              <div className="jenCellabos-text m-0">
                <span className="centered">Jen Cellabos × KOOVS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenBanner;
