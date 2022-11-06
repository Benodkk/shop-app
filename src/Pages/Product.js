import { useParams } from "react-router-dom";
import Header from "../Components/Header and Footer/Header";
import Footer from "../Components/Header and Footer/Footer";
import ProductDetails from "../Components/Products/ProductDetails";
import React from "react";

function Product() {
  const { id } = useParams();

  return (
    <div className="Product">
      <Header />
      <ProductDetails id={id} />
      {/* <Footer/> */}
    </div>
  );
}

export default Product;
