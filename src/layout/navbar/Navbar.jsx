/* eslint-disable react-hooks/exhaustive-deps */
import "./Navbar.css";
import * as img from "../../images/images";
import * as icon from "../../icon/Icons";
import { InfoCart } from "./InfoCart";
import { useContext, useEffect, useRef, useState } from "react";
import MainContext from "../../context/main-context";
import { useOnClickOutside } from "../../utils/utils";
import { IconCart } from "../../icon/Svgs";

export const Navbar = () => {
  const context = useContext(MainContext);
  const ref = useRef();

  let infoCart = "Your cart is empty";

  const textsLi = [
    { id: 1, text: "Collections" },
    { id: 2, text: "Men" },
    { id: 3, text: "Women" },
    { id: 4, text: "About" },
    { id: 5, text: "Contact" },
  ];

  const [cartVisible, setcartVisible] = useState(false);
  const [count, setCount] = useState(0);

  const checkCart = () => {
    setcartVisible(!cartVisible);
  };

  useOnClickOutside(ref, () => setcartVisible(false));

  useEffect(() => {
    let countTemp = 0;
    context.product.map((x) => (countTemp = countTemp + x.count));
    setCount(countTemp);
  }, [context.product]);

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
      <div ref={ref} className="icon-cart-and-img">
        <div onClick={checkCart} className="icon-cart">
          <IconCart />
          {count !== 0 && <span className="icon-cart-count">{count}</span>}
        </div>
        {cartVisible && <InfoCart infoCart={infoCart} />}
        <div className="img-avater">
          <img src={img.img_avatar} alt="avatar" />
        </div>
      </div>
    </nav>
  );
};
