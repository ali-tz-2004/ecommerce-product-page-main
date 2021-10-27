import "./Navbar.css";
import * as img from "../images/images";
export const Navbar = () => {
  const textsLi = [
    { id: 1, text: "Collections" },
    { id: 2, text: "Men" },
    { id: 3, text: "Women" },
    { id: 4, text: "About" },
    { id: 5, text: "Contact" },
  ];
  return (
    <nav className="navbar">
      <div className="logo-and-menu">
        <div className="logo-navbar">
          <img src={img.logo} alt="logo" />
        </div>
        <ul className="menu">
          {textsLi.map((x) => (
            <li key={x.id}>{x.text}</li>
          ))}
        </ul>
      </div>
      <div className="icon-cart-and-img">
        <div className="icon-cart">
          <img src={img.icon_cart} alt="cart" />
        </div>
        <div className="img-avater">
          <img src={img.img_avatar} alt="avatar" />
        </div>
      </div>
    </nav>
  );
};
