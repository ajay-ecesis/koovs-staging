import React from "react";
import "./mobilestart.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
class MobileStart extends React.Component {
  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        partialVisibilityGutter: 30,
        slidesToSlide: 1, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        partialVisibilityGutter: 60,
        slidesToSlide: 2, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3,
        partialVisibilityGutter: 140,
        slidesToSlide: 1, // optional, default to 1.
      },
    };
    return (
      <section className="MobileStart d-xs-block  d-sm-block d-lg-none d-xl-none pb-3">
        <div className="container">
          <div className="row ">
            <h5 className="py-4 fs-16 where-start-text">Where do you want to start?</h5>
            <div className="row  px-lg-0 where-start" id="carousel-slide">
              <Carousel interval={3000} touch={true} arrows={false} responsive={responsive} renderButtonGroupOutside={true} swipeable={true} draggable={false} autoPlay={false}
                autoPlaySpeed={2000}>
                <div className="mx-2">
                <Link
                    to="/collection/men"
                    style={{ textDecoration: "none", color: "black" }}
                  > <div className="bg-white p-2 border border-dark text-center fs-14">
                    Men
                  </div>
                  </Link>
                </div>
                <div className="mx-2">
                <Link
                    to="/collection/women"
                    style={{ textDecoration: "none", color: "black" }}
                  >    <div className="bg-white p-2 border border-dark text-center fs-14">
                    Women
                  </div>
                  </Link>
                </div>
                <div className="mx-2">
                  <div className="bg-white p-2 border border-dark text-center fs-14">
                    Collaboration
                  </div>
                </div>
                <div className="mx-2">
                  <div className="bg-white p-2 border border-dark text-center fs-14">
                    Loved
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MobileStart;
