import { useState, useContext, useEffect } from "react";
import { datas } from "../../database/data";
import { CurrencyContext } from "../Features/Currency";
import React from "react";

function ProductDetails({ id }) {
  const context = useContext(CurrencyContext);

  const product = datas.find((x) => x.id == id);

  const [bigPhoto, setBigPhoto] = useState(product.gallery[0]);
  const [currency, setCurrency] = useState(context.currency);
  const [price, setPrice] = useState(
    product.prices.find((x) => x.currency.symbol == context.currency)
  );

  useEffect(() => {
    setCurrency(context.currency);
    setPrice(product.prices.find((x) => x.currency.symbol == context.currency));
  }, [context]);

  const [capacity, setCapacity] = useState(product.attributes[1].items[0].id);
  const [color, setColor] = useState(product.attributes[0].items[0].id);

  // set border if capacity/color selected

  function elementB(e) {
    if (e == capacity || e == color) {
      return "solid 5px red";
    }
  }

  // add to cart

  function add() {
    const newProduct = {
      item: product.id,
      name: product.name,
      color: color,
      capacity: capacity,
      quantity: 1,
    };

    if (
      context.cart.some(
        (x) =>
          x.item == product.id && x.color == color && x.capacity == capacity
      )
    ) {
      context.cart.find(
        (x) =>
          x.item == product.id && x.color == color && x.capacity == capacity
      ).quantity++;
      context.setCart(context.cart);
    } else {
      context.setCart(context.cart.concat(newProduct));
    }
    context.setItemQuantity(context.itemQuantity + 1);
    console.log(datas);
    console.log(context);
  }

  return (
    <section className="product" style={{ paddingTop: "70px" }}>
      <div className="productGallery">
        <div className="productPhotos">
          {product.gallery.map((element) => {
            return (
              <img
                alt="small"
                key={element}
                src={element}
                onClick={() => setBigPhoto(element)}
              />
            );
          })}
        </div>
        <img alt="main" className="bigPhoto" src={bigPhoto} />
      </div>
      <div className="productDetails">
        <div className="productName">{product.name}</div>
        <div className="productCapacity">
          <div className="productLabel">CAPACITY:</div>
          <div>
            {product.attributes[1].items.map((element) => {
              return (
                <div
                  className="capacityTypes"
                  key={element.id}
                  onClick={() => {
                    setCapacity(element.id);
                  }}
                  style={{ border: elementB(element.id) }}
                >
                  {element.displayValue}
                </div>
              );
            })}
          </div>
        </div>
        <div className="productColor">
          <div className="productLabel">COLOR:</div>
          <div>
            {product.attributes[0].items.map((element) => {
              return (
                <div
                  className="colorTypes"
                  key={element.id}
                  onClick={() => {
                    setColor(element.id);
                  }}
                  style={{ border: elementB(element.id) }}
                >
                  {element.displayValue}
                </div>
              );
            })}
          </div>
        </div>
        <div className="productPrice">
          <div className="productLabel">PRICE:</div>
          <div className="price">
            {currency}
            {price.amount}
          </div>
        </div>
        <button onClick={add}>ADD TO CART</button>
        <div className="productDescription">{product.description}</div>
      </div>
    </section>
  );
}

export default ProductDetails;
