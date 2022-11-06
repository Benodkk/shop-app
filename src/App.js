import React, { Component } from "react";
import datas from "./database/data.js";
import mac from "./database/photos/macbook-pro.jpg";
import Header from "./Components/Header and Footer/Header";
import WelcomeComponent from "./Components/MainSite/WelcomeComponent.js";
import { CurrencyContextProvider } from "./Components/Features/Currency.js";
import PopularProducts from "./Components/MainSite/PopularProducts.js";

function App() {
  return (
    <div className="App">
      <Header />
      <WelcomeComponent />
      <PopularProducts />
    </div>
  );
}

export default App;
