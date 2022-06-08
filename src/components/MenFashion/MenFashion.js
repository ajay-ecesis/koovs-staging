import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./menfashion.css";
import headbandimg from "../../assets/images/headband.png";
import dressimg from "../../assets/images/dress.png";
import sandalimg from "../../assets/images/sandal.png";
import shoeimg from "../../assets/images/shoe.png";
import { loadProductByCategoryApi } from "../../api/commonApi";

function MenFashion() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      partialVisibilityGutter: 0,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
              partialVisibilityGutter: 0,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      partialVisibilityGutter: 30,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const [menItems, setMenItems] = useState([]);

  useEffect(() => {
    loadWomenCategoryItems();
  }, []);

  const loadWomenCategoryItems = async () => {
    let data = await loadProductByCategoryApi("men","shirts");

    console.log("data from women page", data[0].data);
    setMenItems(data[0].data);
  };
  return (
    <section className="men-fashion py-5">
      <div className="bg-light-blue"></div>
      <div className="container-fluid">
        <div className="row">
          <div className="d-flex justify-content-between">
            <h5 className="fw-bold">Men</h5>
            <p className="fw-bold"><u>View All</u></p>
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
              infinite={true}
            >
               {menItems?.length > 0 &&
                menItems.map((item) => {
                  return (
                    <>
                      <div className="cards overflow-hidden">
                        <div className="bg-grey">
                          <img
                            src={item.imageSmallUrl}
                            className="img-fluid"
                            alt="Koovs product Front image"
                          />
                         <img
                            src={item.imageSmallUrl}
                            className="img-fluid rear-img"
                            alt="Koovs rear product image"
                          />
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
    </section>
  );
}

export default MenFashion;
