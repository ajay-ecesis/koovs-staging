import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./womenfashion.css";
import headbandimg from "../../assets/images/headband.png";
import dressimg from "../../assets/images/dress.png";
import sandalimg from "../../assets/images/sandal.png";
import shoeimg from "../../assets/images/shoe.png";
import { loadProductByCategoryApi } from "../../api/commonApi";

function WomenFashion() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      partialVisibilityGutter: 30,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 60,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 140,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const [fashionItems, setFashionItems] = useState([]);

  useEffect(() => {
    loadWomenCategoryItems();
  }, []);

  const loadWomenCategoryItems = async () => {
    let data = await loadProductByCategoryApi("women","tops");

    console.log("data from women page", data[0].data);
    setFashionItems(data[0].data);
  };

  return (
    <section className="women-fashion py-5">
      <div className="bg-light-blue"></div>
      <div className="container-fluid">
        <div className="row">
          <div className="d-flex justify-content-between">
            <h5 className="fw-bold">Women</h5>
            <p>
              <u>View All</u>
            </p>
          </div>
          <div className="row" id="carousel-slide">
            <Carousel
              partialVisible={true}
              interval={3000}
              touch={true}
              arrows={false}
              responsive={responsive}
              renderButtonGroupOutside={true}
              swipeable={true}
              draggable={false}
              autoPlay={true}
              autoPlaySpeed={2000}
            >
              {fashionItems?.length > 0 &&
                fashionItems.map((item) => {
                  return (
                    <>
                      <div className="cards overflow-hidden">
                        <div className="bg-grey">
                          <img
                            src={item.imageSmallUrl}
                            className="img-fluid"
                            alt="Koovs product Front image"
                          />
                          {/* <img
                            src={headbandimg}
                            className="img-fluid rear-img"
                            alt="Koovs rear product image"
                          /> */}
                          <p className="fw-bold">{item.productName}</p>
                          <p>{item.brandName}</p>
                          <p>{item.price} €</p>
                        </div>
                      </div>
                    </>
                  );
                })}
            </Carousel>
          </div>
        </div>
      </div>
      <br />
    </section>
  );
}

export default WomenFashion;
