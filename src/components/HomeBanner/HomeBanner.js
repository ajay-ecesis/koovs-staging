import React from "react";
import { Carousel } from "react-bootstrap";
import "./homebanner.css";
import bannerimg from "../../assets/images/koovs_homebanner.png";
import storiesimg from "../../assets/images/Screenshot.png";

function HomeBanner() {
  const hideCookieBanner = () => {
    var element = document.getElementById("cookieBanner");
    element.classList.remove("show");
    element.classList.add("hide");
  };
  return (
    <section className="home_banner">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-6">
            <Carousel controls={true} interval={700} fade>
              <Carousel.Item>
                <div className="banner-Image">
                  <img
                    src={bannerimg}
                    className="w-100 img-fluid"
                    alt="DMG banner "
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="banner-Image">
                  <img
                    src={storiesimg}
                    alt="DMG banner "
                    className="w-100 img-fluid"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="banner-Image">
                  <img
                    src={bannerimg}
                    alt="DMG banner"
                    className="w-100 img-fluid"
                  />
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-12 col-lg-6 align-self-center d-none d-lg-block">
            <div className="category-carousel">
              <div className="row g-3 p-5">
                <h5 className="fw-bold">Where do you want to start?</h5>
                <div className="col-6">
                <div className="bg-white p-2 border border-dark text-center">Men</div>
                </div>
                <div className="col-6">
                  <div className="bg-white p-2 border border-dark  text-center">Women</div>
                </div>
                <div className="col-6">
                  <div className="bg-white p-2 border border-dark  text-center">
                    Pre loved
                  </div>
                </div>
                <div className="col-6">
                  <div className="bg-white p-2 border border-dark  text-center">
                    Collaborations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="toast show" id="cookieBanner">
          <div className="toast-header d-inline-block d-lg-flex align-items-center justify-content-between gap-3">
            <div className="text-dark flex-grow-1">
              We use cookies to ensure that we give you the best expereince on
              our website. If you continue, we will assume that you agree with
              this and
              <br /> accept our cookie policy. Learn more here.
            </div>
            <button className="border-0 bg-transparent d-none d-lg-block">
              <u>COOKIE SETTINGS</u>
            </button>
            <button
              className="btn btn-outline-dark rounded-0 px-4 d-none d-lg-block"
              onClick={hideCookieBanner}
            >
              REJECT ALL
            </button>
            <button
              className="btn btn-dark rounded-0 px-4"
              onClick={hideCookieBanner}
            >
              ACCEPT ALL
            </button>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              onClick={hideCookieBanner}
            ></button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;
