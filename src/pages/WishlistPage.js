import React, { useEffect, useState } from "react";
import AccountSideNav from "../components/AccountSideNav/AccountSideNav";
import Header from "../components/Header/Header";
import { useSelector } from "react-redux";
import Wishlist from "../components/Wishlist/Wishlist";
import { loadWishListBySkuIdApi } from "../api/cart";

const WishlistPage = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getWishlistItemsByBatchId();
  }, [wishlistItems]);
  const getWishlistItemsByBatchId = async () => {
    let result = wishlistItems.map((item) => item.sku);
    result = result.toString();
    let data = await loadWishListBySkuIdApi(result);
    setProducts(data.data);
  };

  return (
    <>
      <Header />
      <AccountSideNav index={4}>
        <Wishlist products={products} getWishlistItemsByBatchId={getWishlistItemsByBatchId} />
      </AccountSideNav>
    </>
  );
};

export default WishlistPage;
