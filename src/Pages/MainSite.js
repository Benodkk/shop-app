import React from "react";
import Header from "../Components/Header and Footer/Header";
import WelcomeComponent from "../Components/MainSite/WelcomeComponent.js";
import PopularProducts from "../Components/MainSite/PopularProducts.js";
import Footer from "../Components/Header and Footer/Footer";

function MainSite() {
  return (
    <div className="mainSite">
      <Header />
      <WelcomeComponent />
      <PopularProducts />
      <Footer />
    </div>
  );
}

export default MainSite;
