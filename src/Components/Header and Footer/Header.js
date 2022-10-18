import { useContext, useState } from "react"
import {CurrencyContext} from "../Features/Currency"
import shoppingCart from "../../Assets/shopping-cart.png"



function Header(){

    const context = useContext(CurrencyContext)

    return(
        <header>
            <div className="headerChild1">
                <nav>
                    <a href="/laptops">Laptops</a>
                    <a href="/smartphones">Smartphones</a>
                    <a href="/all">All Products</a>
                </nav>
            </div>
            <div className="headerChild2">
                <div className="companyName">TechShop</div>
            </div>
            <div className="headerChild3">
                <a href="/pay">
                    <img alt="pay" className="shoppingCart" src={shoppingCart}/>
                </a>
                <select name="currency" onChange={context.change} value={context.currency}>
                    <option value='$'>$</option>
                    <option value='£'>£</option>
                    <option value='A$'>A$</option>
                    <option value='¥'>¥</option>
                    <option value='₽'>₽</option>
                </select>
            </div>
        </header>
    )
}

export default Header