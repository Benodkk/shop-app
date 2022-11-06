import React from "react";
import ReactDOM from "react-dom/client";
import RouteSwitch from "./RouteSwitch";
import { CurrencyContextProvider } from "./Components/Features/Currency";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CurrencyContextProvider>
      <RouteSwitch />
    </CurrencyContextProvider>
  </React.StrictMode>
);
