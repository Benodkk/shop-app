import { useState, useContext, useEffect } from "react";
import { datas } from "../../database/data";
import { CurrencyContext } from "../Features/Currency";
import React from "react";
import ProductAddToCart from "./ProductAddToCart";

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

  function focusStyle(e) {
    if (e == capacity) {
      return {
        color: "white",
        backgroundColor: "black",
      };
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
    } else {
      context.setCart(context.cart.concat(newProduct));
    }
    context.setItemQuantity(context.itemQuantity + 1);
    setAddToCart(true);
  }

  // add to Cart prompt

  const [addToCart, setAddToCart] = useState(false);
  const [style, setStyle] = useState({});
  const [style2, setStyle2] = useState({});

  function hidePrompt() {
    setAddToCart(false);
  }

  useEffect(() => {
    if (addToCart) {
      setStyle({
        visibility: "visible",
        opacity: 1,
      });
      setStyle2({
        transform: "translate(-50%, -50%)",
      });
    } else {
      setStyle({
        visibility: "hidden",
        opacity: 0,
      });
      setStyle2({
        transform: "translate(-50%, -65%)",
      });
    }
  }, [addToCart]);

  return (
    <div className="product">
      <ProductAddToCart style={style} style2={style2} hidePrompt={hidePrompt} />
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
          <div className="capacityTypes">
            {product.attributes[1].items.map((element) => {
              return (
                <div
                  className="capacityType"
                  key={element.id}
                  onClick={() => {
                    setCapacity(element.id);
                  }}
                  style={focusStyle(element.id)}
                >
                  {element.displayValue}
                </div>
              );
            })}
          </div>
        </div>
        <div className="productColor">
          <div className="productLabel">COLOR:</div>
          <div className="colorTypes">
            {product.attributes[0].items.map((element) => {
              return (
                <div
                  className="colorType"
                  key={element.id}
                  onClick={() => {
                    setColor(element.id);
                  }}
                  style={{
                    backgroundColor: element.value,
                    border: elementB(element.id),
                  }}
                ></div>
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
        <button className="addToCartBtn" onClick={add}>
          ADD TO CART
        </button>
        <div className="productDescription">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductDetails;
