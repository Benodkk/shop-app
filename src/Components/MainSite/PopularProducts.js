import ItemCard from "../ItemCard/ItemCard";
import { datas } from "../../database/data";
import React from "react";

function PopularProducts() {
  return (
    <section className="popularSection">
      <h2>Popular Products</h2>
      <div className="popularElements">
        <ItemCard element={datas[0]} />
        <ItemCard element={datas[1]} />
        <ItemCard element={datas[2]} />
      </div>
    </section>
  );
}
export default PopularProducts;
