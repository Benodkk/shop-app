import React, { useState } from "react";

const CurrencyContext = React.createContext();

function CurrencyContextProvider(props) {
  const [cart, setCart] = useState([]);

  const [currency, setCurrency] = useState("$");

  const change = (e) => {
    setCurrency(e.target.value);
  };

  const [itemQuantity, setItemQuantity] = useState(0);

  return (
    <CurrencyContext.Provider
      value={{ currency, change, cart, setCart, itemQuantity, setItemQuantity }}
    >
      {props.children}
    </CurrencyContext.Provider>
  );
}

export { CurrencyContextProvider, CurrencyContext };
