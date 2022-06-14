import React, { Component, useEffect, useState } from 'react'
import Slider from 'react-slick'
import './productdescription.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const ProductDescription = ({ productData }) => {
  const [state, setState] = useState({
    nav1: null,
    nav2: null
  })
  const [nav1, setNav1] = useState()
  const [nav2, setNav2] = useState()
  const [loading, setLoading] = useState(true)
  const [productDetail, setProductDetail] = useState(null)

  useEffect(() => {
    if (productData) setProductDetail(productData[0]?.data[0])
    console.log('data from props', productData[0]?.data[0])
    setLoading(false)
  }, [productData])

  const loadingPlaceholder = () => {
    return <></>
  }
  return (
    <section className='product-detail'>
      {productDetail != null && !loading ? (
        <>
          <div className='container-fluid px-0 b-bottom'>
            <div className='row mt-3'>
              <Breadcrumb>
                {productDetail.product.breadCrumb.map(nav => {
                  return (
                    <>
                      <Breadcrumb.Item href={nav?.links[0]?.href}>
                        {nav.title}
                      </Breadcrumb.Item>
                    </>
                  )
                })}
              </Breadcrumb>
            </div>
          </div>
          <div className='container-fluid ImageDesc'>
            <div className='row'>
              <div className='col-12 col-lg-6'>
                <div className='float-start w-75 me-2 mt-3 position-relative'>
                  <div className='favIcon me-2 d-lg-block d-none'>
                    <input type='checkbox' id='heart' />
                    <label for='heart'>
                      <i class='fa fa-heart-o' aria-hidden='true'></i>
                    </label>
                  </div>
                  <Slider
                    asNavFor={nav2}
                    ref={slider1 => setNav1(slider1)}
                    arrows={true}
                    fade={true}
                  >
                    {productDetail.product.imageUrls?.map(img => {
                      return (
                        <>
                          <div>
                            <img
                              src={img}
                              className='img-fluid w-100 '
                              alt='Koovs imagettt'
                            />
                          </div>
                        </>
                      )
                    })}
                  </Slider>
                </div>
                <div className='slideshow-gallery mt-2'>
                  <Slider
                    asNavFor={nav1}
                    ref={slider2 => setNav2(slider2)}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    vertical={true}
                  >
                    {productDetail.product.imageUrls?.map(img => {
                      return (
                        <>
                          <div>
                            <img
                              src={img}
                              className='img-fluid'
                              alt='Koovs image'
                            />
                          </div>
                        </>
                      )
                    })}
                  </Slider>
                </div>
              </div>
              <div className='col-12 col-lg-6'>
                <div className='w-75 mx-auto d-table pt-lg-5 pt-3'>
                  <div className='product-name d-flex align-items-center fw-bold'>
                    <div className='favIcon me-2 position-relative me-4 d-lg-none'>
                      <input type='checkbox' id='heart3' />
                      <label for='heart3'>
                        <i class='fa fa-heart-o' aria-hidden='true'></i>
                      </label>
                    </div>
                    <div className='flex-grow-1'>
                      <p className='mb-0'>{productDetail.product.brandName}</p>
                      <p className='mb-0'>{productDetail.product.commodity}</p>
                    </div>
                    <div>₹ {productDetail.product.discountPrice}</div>
                  </div>
                  <br />
                  <div className='d-flex align-items-center py-lg-4 py-0'>
                    <div className='w-25'>COLOR</div>
                    <div className='preview-color'>
                      {/* color mapping from api */}
                      {productDetail.attributes?.colors.map(color => {
                        return (
                          <>
                            <input
                              className='blue'
                              style={{ background: color.code }}
                              name='color'
                              type='radio'
                            />
                          </>
                        )
                      })}
                    </div>
                  </div>
                  <div className='d-flex align-items-center pb-lg-4 pb-0'>
                    <div className='w-25'>SIZE</div>
                    <div className='preview-size'>
                      <ul className='d-flex align-items-center'>
                        {/* size mapping from API  */}
                        {productDetail.attributes?.sizes.map(size => {
                          return (
                            <>
                              <li className={size.isOutOfStock && 'no-stock'}>
                                {size.code}
                              </li>
                            </>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                  <br />
                  <button className='btn w-100 btn-dark rounded-0'>
                    ADD TO CART
                  </button>
                  <div className='product-desc pt-5'>
                    <div className='product-spec-mobile'>
                      <h5>DESCRIPTION</h5>
                      <p className='p-desc'>
                        {productDetail.product.brandDescription}{' '}
                      </p>
                    </div>
                    <div className='product-spec-mobile'>
                      <h5 className='pt-lg-3 '>DETAILS</h5>
                      <div
                        className='productSpec'
                        dangerouslySetInnerHTML={{
                          __html: productDetail.product.productDescription
                        }}
                      />
                    </div>
                    <div className='product-spec-mobile'>
                      <h5 className='pt-lg-3'>SIZE AND FIT</h5>

                      {/* <div dangerouslySetInnerHTML={{
                          __html: productDetail.product.styletipSizeFit
                        }}> </div> */}
                    </div>
                    <h6 className='pt-4'>
                      <u>FIND YOUR SIZE</u>
                    </h6>

                    <div className='product-spec-mobile'>
                      <h5 className='pt-lg-5 pt-lg-3'>SHIPPING AND RETURN</h5>
                      <ul>
                        <li>{productDetail.product.deliveryText}</li>
                      </ul>
                    </div>
                    <h6 className='pt-lg-4 pt-lg-3'>
                      <u>MORE INFORMATION</u>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </section>
  )
}

export default ProductDescription
