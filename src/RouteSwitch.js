import { HashRouter, Routes, Route } from "react-router-dom";
import MainSite from "./Pages/MainSite";
import Product from "./Pages/Product";
import ProductLists from "./Pages/ProductLists";
import Pay from "./Pages/Pay";
import React from "react";

import "./style.css";

const RouteSwitch = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/list/:type" element={<ProductLists />} />
        <Route path="/pay" element={<Pay />} />
      </Routes>
    </HashRouter>
  );
};
export default RouteSwitch;
