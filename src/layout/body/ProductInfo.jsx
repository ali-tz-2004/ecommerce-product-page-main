import * as icon from "../../icon/icons";
import { IconCart } from "../../icon/IconCart";
export const ProductInfo = () => {
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
          <h3 className="price-after-discount-sneaker">$125.00</h3>
          <span className="discount-sneaker">50%</span>
        </div>
        <div className="price-main">
          <del className="price-main-sneaker">$250.00</del>
        </div>
      </div>
      <div className="number-buy-sneaker">
        <div className="number-plus-and-minus">
          <img className="icon icon-plus" src={icon.icon_minus} alt="" />
          <span className="number-buy">0</span>
          <img className="icon icon-plus" src={icon.icon_plus} alt="" />
        </div>
        <div className="add-cart-sneaker">
          <button className="add-cart">
            <IconCart />
            Add to cart
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};
