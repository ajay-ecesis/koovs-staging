import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import WomenHomeBanner from "../components/WomenHomeBanner/WomenBanner";
import MenSlider from "../components/MenSlider/CategoryMenuSlider";
import MenProductSlider from "../components/MenProductSlider/MenCategoryProductSlider";
import MidSeasonSale from "../components/MidSeasonSale/MidSeasonSale";
import LiveInWomen from "../components/LiveInWomen/LiveInWomen";
import MobileMenBanner from "../components/MobileMenBanner/MobileMenBanner";

const HomePageWomen = () => {
  return (
    <div className="HomeMen">
      <Header />
      <WomenHomeBanner />
      <MidSeasonSale />
      <MobileMenBanner />
      <MenSlider />
      <MenProductSlider />
      <LiveInWomen />
      <Footer />
    </div>
  );
};

export default HomePageWomen;
