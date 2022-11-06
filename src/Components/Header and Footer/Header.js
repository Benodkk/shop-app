import React, { useEffect, useState, useContext } from "react";
import { CurrencyContext } from "../Features/Currency";
import shoppingCart from "../../Assets/shopping-cart.png";
import { Link } from "react-router-dom";

function Header() {
  const context = useContext(CurrencyContext);

  return (
    <header>
      <div className="headerContainer">
        <div className="headerChild1">
          <nav>
            <Link to="/list/laptop">Laptops</Link>
            <Link to="/list/smartphone">Smartphones</Link>
            <Link to="/list/all">All Products</Link>
          </nav>
        </div>
        <div className="headerChild2">
          <Link to="/" className="companyName">
            TechShop
          </Link>
        </div>
        <div className="headerChild3">
          <div>{context.itemQuantity}</div>
          <Link to="/pay">
            <img alt="pay" className="shoppingCart" src={shoppingCart} />
          </Link>
          <select
            name="currency"
            onChange={context.change}
            value={context.currency}
          >
            <option value="$">$</option>
            <option value="£">£</option>
            <option value="A$">A$</option>
            <option value="¥">¥</option>
            <option value="₽">₽</option>
          </select>
        </div>
      </div>
    </header>
  );
}

export default Header;
