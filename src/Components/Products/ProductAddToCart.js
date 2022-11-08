import React from "react";
import check from "../../Assets/check.png";
import { Link } from "react-router-dom";

function ProductAddToCart({ style, style2, hidePrompt }) {
  return (
    <div className="productAddContainer" style={style}>
      <div className="blackOut"></div>
      <div className="productAdd" style={style2}>
        <div className="addMessage">
          <img src={check} />
          <div>Product added to cart!</div>
        </div>
        <div className="addButtons">
          <button className="continueBtn" onClick={hidePrompt}>
            Continue shopping!
          </button>
          <button className="paymentBtn" onClick={hidePrompt}>
            <Link to="/pay">Go to payment!</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductAddToCart;
