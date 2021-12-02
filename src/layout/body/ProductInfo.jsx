import * as icon from "../../icon/icons";
import { IconCart } from "../../icon/IconCart";
import { useState } from "react/cjs/react.development";
export const ProductInfo = () => {
  let discountedPrice = 125.0;
  let rebateKala = 50;
  let originalPrice = 250.0;
  let [count, setCount] = useState(0);
  const clickMinus = () => {
    let temp = count;
    temp -= 1;
    if (temp >= 0) setCount((setCount = temp));
  };
  const clickPlus = () => {
    let temp = count;
    temp += 1;
    setCount((setCount = temp));
  };
  return (
    <div className="product-info">
      <div className="sneaker-company">
        <span>SNEAKER COMPANY</span>
      </div>
      <div className="title-sneaker">
        <h2>Fall Limited Edition Sneakers</h2>
      </div>
      <div className="about-sneaker">
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="price-sneaker">
        <div className="price-and-discount">
          <h3 className="price-after-discount-sneaker">${discountedPrice}</h3>
          <span className="discount-sneaker">{rebateKala}%</span>
        </div>
        <div className="price-main">
          <del className="price-main-sneaker">${originalPrice}</del>
        </div>
      </div>
      <div className="number-buy-sneaker">
        <div className="number-plus-and-minus">
          <img
            onClick={clickMinus}
            className="icon icon-minus"
            src={icon.icon_minus}
            alt="icon minus"
          />
          <span className="number-buy">{count}</span>
          <img
            onClick={clickPlus}
            className="icon icon-plus"
            src={icon.icon_plus}
            alt="icon plus"
          />
        </div>
        <div className="add-cart-sneaker">
          <button className="add-cart">
            <IconCart />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
