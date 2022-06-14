import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import ProductDescription from '../components/ProductDescription/ProductDescription'
import FavouriteProducts from '../components/FavouriteProducts/FavouriteProducts'
import Footer from '../components/Footer/Footer'
import { loadSingleProduct } from '../api/commonApi'
import { useParams } from 'react-router-dom'
import 'react-loading-skeleton/dist/skeleton.css'

const ProductDetail = () => {
  let { productId, lineId } = useParams()
  const [productDetails, setProductDetails] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (productId && lineId) loadProducts()
  }, [productId, lineId])
  const loadProducts = async () => {
    setLoading(true)
    let data = await loadSingleProduct(productId, lineId)
    setProductDetails([data])
    setLoading(false)
  }

  return (
    <>
      {' '}
      <Header />
      {!loading ? (
        <>
          <ProductDescription productData={productDetails} />
          <FavouriteProducts skuId={productDetails[0]?.data[0]?.product.sku} />
        </>
      ) : (
        <>
        <div>
        <div class="skeleton-uuypnq47b80"></div>      </div>
        </>
      )}
      <Footer />
    </>
  )
}

export default ProductDetail
