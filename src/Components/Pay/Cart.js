import { useContext, useEffect, useState } from "react";
import { datas } from "../../database/data";
import { CurrencyContext } from "../Features/Currency";
import React from "react";
import { Link } from "react-router-dom";

function Cart() {
  const context = useContext(CurrencyContext);

  const [totalAmount, setTotalAmount] = useState(0);

  // add/substact one product

  function addOne(id, capacity, color) {
    context.cart.find(
      (x) => x.item == id && x.color == color && x.capacity == capacity
    ).quantity++;
    context.setItemQuantity((context.itemQuantity += 1));
  }

  function removeOne(id, capacity, color) {
    if (
      context.cart.find(
        (x) => x.item == id && x.color == color && x.capacity == capacity
      ).quantity > 1
    ) {
      context.cart.find(
        (x) => x.item == id && x.color == color && x.capacity == capacity
      ).quantity--;
      context.setItemQuantity((context.itemQuantity -= 1));
    }
  }

  // delete product

  function deleteOne(id, capacity, color) {
    context.setItemQuantity(
      (context.itemQuantity -= context.cart.find(
        (x) => x.item == id && x.color == color && x.capacity == capacity
      ).quantity)
    );

    context.setCart(
      context.cart.filter(
        (x) => x.item !== id || x.color !== color || x.capacity !== capacity
      )
    );
  }

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < context.cart.length; i++) {
      sum +=
        context.cart[i].quantity *
        datas
          .find((x) => x.id == context.cart[i].item)
          .prices.find((x) => x.currency.symbol == context.currency).amount;
    }
    setTotalAmount(sum);
  }, [context.itemQuantity, context.currency]);

  return (
    <div className="cartContainer">
      <div className="cart">
        {context.cart.map((element) => {
          return (
            <div
              className="oneProduct"
              key={element.item + element.color + element.capacity}
            >
              <img
                alt="product"
                src={datas.find((x) => x.id == element.item).gallery[0]}
              />
              <div className="oneName">
                <Link to={`/product/${element.item}`}>{element.name}</Link>
              </div>
              <div className="oneCapacity">{element.capacity}</div>
              <div
                className="oneColor"
                style={{
                  backgroundColor: datas
                    .find((x) => x.id == element.item)
                    .attributes[0].items.find(
                      (x) => x.displayValue == element.color
                    ).value,
                }}
              >
                {}
              </div>
              <div className="oneQuantity">
                <button
                  className="changeQuantity"
                  onClick={() => {
                    removeOne(element.item, element.capacity, element.color);
                  }}
                >
                  -
                </button>
                <div className="valueQuantity">{element.quantity}</div>
                <button
                  className="changeQuantity"
                  onClick={() => {
                    addOne(element.item, element.capacity, element.color);
                  }}
                >
                  +
                </button>
              </div>
              <div className="onePrice">
                {
                  datas
                    .find((x) => x.id == element.item)
                    .prices.find((x) => x.currency.symbol == context.currency)
                    .amount
                }
                {context.currency}
              </div>
              <button
                className="deleteBTN"
                onClick={() => {
                  deleteOne(element.item, element.capacity, element.color);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <div className="summary">
        <div className="empty"></div>
        <div className="inTotal">In total:</div>
        <div className="totalAmount">
          {Math.round(totalAmount * 100) / 100}
          {context.currency}
        </div>
        <button className="payBtn">Pay</button>
      </div>
    </div>
  );
}

export default Cart;
