import { useContext, useEffect, useState } from "react";
import { datas } from "../../database/data";
import { CurrencyContext } from "../Features/Currency";
import React from "react";

function Cart() {
  const context = useContext(CurrencyContext);

  return (
    <div style={{ paddingTop: "80px" }}>
      {context.cart.map((element) => {
        return (
          <div
            className="oneProduct"
            key={element.item + element.color + element.capacity}
          >
            <div className="oneName">{element.name}</div>
            <div className="oneCapacity">{element.capacity}</div>
            <div className="oneColor">{element.color}</div>
            <div className="oneQuantity">
              <button className="changeQuantity">-</button>
              <div className="valueQuantity">{element.quantity}</div>
              <button className="changeQuantity">+</button>
            </div>
            <div>
              {
                datas
                  .find((x) => x.id == element.item)
                  .prices.find((x) => x.currency.symbol == context.currency)
                  .amount
              }
              {context.currency}
            </div>
            <button className="deleteBTN">delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
