import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./womenfashion.css";
import headbandimg from "../../assets/images/headband.png";
import dressimg from "../../assets/images/dress.png";
import sandalimg from "../../assets/images/sandal.png";
import shoeimg from "../../assets/images/shoe.png";
import { loadProductByCategoryApi } from "../../api/commonApi";
import { Card, Placeholder } from "react-bootstrap";


function WomenFashion() {
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
      partialVisibilityGutter: 60,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      partialVisibilityGutter: 30,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const [fashionItems, setFashionItems] = useState([]);

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    loadWomenCategoryItems();
  }, []);

  const loadWomenCategoryItems = async () => {
    setLoading(true)
    let data = await loadProductByCategoryApi("women", "tops");

    console.log("data from women page", data[0].data);
    setFashionItems(data[0].data);
    setLoading(false)
  };


  const loadingPlaceholder = () => {

    return (<>
      <Carousel
        infinite={true}
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


        <Card style={{ width: '18rem', border: "none" }}>
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={12} className="image_placeholder" >&nbsp &nbsp &nbsp </Placeholder>
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={3} /> <br /><Placeholder xs={2} />
            </Placeholder>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', border: "none" }}>
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={12} className="image_placeholder" >&nbsp &nbsp &nbsp </Placeholder>
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={3} /> <br /><Placeholder xs={2} />
            </Placeholder>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', border: "none" }}>
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={12} className="image_placeholder" >&nbsp &nbsp &nbsp </Placeholder>
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={3} /> <br /><Placeholder xs={2} />
            </Placeholder>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', border: "none" }}>
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={12} className="image_placeholder" >&nbsp &nbsp &nbsp </Placeholder>
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={3} /> <br /><Placeholder xs={2} />
            </Placeholder>
          </Card.Body>
        </Card><Card style={{ width: '18rem', border: "none" }}>
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={12} className="image_placeholder" >&nbsp &nbsp &nbsp </Placeholder>
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={3} /> <br /><Placeholder xs={2} />
            </Placeholder>
          </Card.Body>
        </Card>

      </Carousel>




    </>)

  }


  return (
    <section className="women-fashion py-lg-5 pt-4">
      <div className="bg-light-blue"></div>
      <div className="container-fluid">
        <div className="row">
          <div className="d-flex justify-content-between">
            <h5 className="fw-bold">Women</h5>
            <p className="fw-bold"><u>View All</u></p>
          </div>
          <div className="row" id="carousel-slide">

            {loading && loadingPlaceholder()}

            <Carousel
              infinite={true}
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
                      <div className="cards overflow-hidden" id={item.id}>
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
      <br />
    </section>
  );
}

export default WomenFashion;
