import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MenHomeBanner from "../components/MenHomeBanner/MenBanner";
import MenSlider from "../components/MenSlider/CategoryMenuSlider";
import MenProductSlider from "../components/MenProductSlider/MenCategoryProductSlider";
import MidSeasonSale from "../components/MidSeasonSale/MidSeasonSale";
import MobileMenBanner from "../components/MobileMenBanner/MobileMenBanner";
import LiveInMen from "../components/LiveInMen/LiveInMen";
import { useParams } from "react-router-dom";
import { loadProductByCategoryApi, loadSingleProduct } from "../api/commonApi";
import WomenHomeBanner from '../components/WomenHomeBanner/WomenBanner';

const CategoryPage = () => {
  let { category } = useParams();

  const [categoryName,setCategoryName]=useState()
  useEffect(()=>{
if(category)
setCategoryName(category)
  },[category])
  return (
    <div className="HomeMen">
      <Header />
      {categoryName == "men"||categoryName=="Men" ? <MenHomeBanner /> : categoryName=="women"|| categoryName=="Women"?   <WomenHomeBanner />:<>sss</>}

      <MidSeasonSale />
      <MobileMenBanner />
      <MenSlider />
      <MenProductSlider />
      <LiveInMen />

      <Footer />
    </div>
  );
};

export default CategoryPage;
