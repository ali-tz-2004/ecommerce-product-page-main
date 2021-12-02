import "./Navbar.css";
import * as img from "../../images/images";
import * as icon from "../../icon/icons";
import { IconCart } from "../../icon/IconCart";
import { InfoCart } from "./InfoCart";
import { useState } from "react";

export const Navbar = () => {
  const textsLi = [
    { id: 1, text: "Collections" },
    { id: 2, text: "Men" },
    { id: 3, text: "Women" },
    { id: 4, text: "About" },
    { id: 5, text: "Contact" },
  ];
  const [iconCart, setIconCart] = useState({ checkCart: false });
  const checkCart = () => {
    let check = iconCart.checkCart;
    setIconCart({ checkCart: !check });
  };
  return (
    <nav className="navbar">
      <div className="logo-and-menu">
        <div className="logo-navbar">
          <img src={icon.logo} alt="logo" />
        </div>
        <ul className="menu">
          {textsLi.map((x) => (
            <li key={x.id}>{x.text}</li>
          ))}
        </ul>
      </div>
      <div className="icon-cart-and-img">
        <div onClick={checkCart} className="icon-cart">
          <IconCart />
        </div>
        {iconCart.checkCart ? (
          <InfoCart infoCart="Your cart is empty." />
        ) : null}
        <div className="img-avater">
          <img src={img.img_avatar} alt="avatar" />
        </div>
      </div>
    </nav>
  );
};
