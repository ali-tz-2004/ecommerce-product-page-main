import "./InfoCart.css";
export const InfoCart = (props) => {
  return (
    <div className="page-cart">
      <div className="title-cart">
        <h2>Cart</h2>
      </div>
      <div className="body-cart">
        <span>{props.infoCart}</span>
      </div>
    </div>
  );
};
// Your cart is empty.
