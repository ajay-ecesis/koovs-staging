import React, { useEffect, useState } from "react";
import AccountSideNav from "../components/AccountSideNav/AccountSideNav";
import Header from "../components/Header/Header";
import { useSelector } from "react-redux";
import Wishlist from "../components/Wishlist/Wishlist";
import { loadWishListBySkuIdApi } from "../api/cart";
import NotSignedWishlist from "../components/Wishlist/NotSignedWishlist";
import Footer from "../components/Footer/Footer";

const WishlistPage = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const user = useSelector((state) => state.user);
  const [products, setProducts] = useState([]);
  const [loading,setLoading]=useState(false)

  useEffect(() => {
    getWishlistItemsByBatchId();
  }, [wishlistItems]);

  const getWishlistItemsByBatchId = async () => {
    setLoading(true)
    let result = wishlistItems.map((item) => item.sku);
    result = result.toString();
    let data = await loadWishListBySkuIdApi(result);
    setProducts(data.data);
    setLoading(false)
  };

  return (
    <>
      <Header />
      <AccountSideNav index={4}>
        {user.isLoggedIn ? (
          <Wishlist
            products={products}
            getWishlistItemsByBatchId={getWishlistItemsByBatchId}
            loading={loading}
          />
        ) : (
          <NotSignedWishlist />
        )}
      </AccountSideNav>

      <Footer />
    </>
  );
};

export default WishlistPage;
