import React from "react";
import { useState } from "react/cjs/react.development";

export const ContextHandler = () => {
  // {name:string, count: number, unitPrice: number}[]
  let [product, setProduct] = useState([]);

  const addValue = (c) => {
    if (product.filter((x) => x.name === c.name).length > 0)
      setProduct(
        product.map((x) => (x.name === c.name ? { ...x, count: c.count } : x))
      );
    else setProduct([...product, c]);
  };

  return {
    product,
    addValue,
  };
};

const MainContext = React.createContext({
  product: [],
  addValue: () => {},
});

export default MainContext;
