import Header from "../Components/Header and Footer/Header";
import Footer from "../Components/Header and Footer/Footer";
import List from "../Components/ProductLists/List";
import React from "react";

function ProductLists() {
  return (
    <div className="productList">
      <Header />
      <List />
      {/* <Footer/> */}
    </div>
  );
}

export default ProductLists;
