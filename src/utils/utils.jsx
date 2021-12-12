import { useEffect } from "react/cjs/react.development";

//public
export function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

// product gallery
export const ProductImage = (props) => {
  return (
    <div className="product-img">
      <img
        className="image-main"
        src={props.selectedImage}
        alt="product1"
        onClick={() => props.setVisiblePreview(true)}
      />
      {props.images.map((x, index) => (
        <div key={x.id} className="images-product">
          <img
            className={`img-product ${x.class}`}
            src={x.img}
            alt="products"
            onClick={() => props.setCurrentImageIndex(index)}
          />
          {x.active && <div className={`layer img-layer`}></div>}
        </div>
      ))}
    </div>
  );
};
