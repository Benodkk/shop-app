import React, { useContext, useEffect, useState } from "react";
import { datas } from "../../database/data";
import { CurrencyContext } from "../Features/Currency";
import { Link } from "react-router-dom";

function ItemCard({ element }) {
  const context = useContext(CurrencyContext);

  const [index, setIndex] = useState(
    element.prices.indexOf(
      element.prices.find((x) => x.currency.symbol === context.currency)
    )
  );

  useEffect(() => {
    setIndex(
      element.prices.indexOf(
        element.prices.find((x) => x.currency.symbol === context.currency)
      )
    );
  }, [context]);

  return (
    <div className="itemCard">
      <div className="imageContainer">
        <Link to={`/product/${element.id}`}>
          <img src={element.gallery[0]} />
        </Link>
      </div>
      <div className="itemName">
        <Link to={`/product/${element.id}`}>{element.name}</Link>
      </div>
      <div className="itemPrice">
        {element.prices[index].amount}
        {element.prices[index].currency.symbol}
      </div>
    </div>
  );
}

export default ItemCard;
