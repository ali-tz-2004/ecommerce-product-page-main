import { useContext } from "react";
import MainContext from "../../context/main-context";
import "./InfoCart.css";
import * as img from "../../images/images";
import { IconDelete } from "../../icon/Svgs";

export const InfoCart = (props) => {
  const context = useContext(MainContext);

  let countKala = context.product.find(
    (x) => x.name === "Fall Limited Edition Sneakers"
  )?.count;
  let nameKala = context.product.find(
    (x) => x.name === "Fall Limited Edition Sneakers"
  )?.name;
  let unitKala = context.product.find(
    (x) => x.name === "Fall Limited Edition Sneakers"
  )?.unitPrice;
  let unitPrice = unitKala * countKala;

  return (
    <div className="page-cart">
      <div className="title-cart">
        <h2>Cart</h2>
      </div>
      <div className="body-cart">
        {countKala > 0 ? (
          <div className="info-cart">
            <div className="info-kala">
              <div className="image-cart">
                <img src={img.img_product_1_thumbnail} alt="" />
              </div>
              <div className="text-cart">
                <span className="about-cart">
                  ${nameKala} ${unitKala} &#215; ${countKala}
                  <b> ${unitPrice}.00</b>
                </span>
              </div>
              <div className="icon-delete">
                <IconDelete />
              </div>
            </div>
            <div className="btn-cart">
              <button>Checkout</button>
            </div>
          </div>
        ) : (
          <div className="defult-info-cart">
            <span>{props.infoCart}</span>
          </div>
        )}
      </div>
    </div>
  );
};
