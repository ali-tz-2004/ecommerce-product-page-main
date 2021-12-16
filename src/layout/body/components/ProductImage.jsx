import { IconNext, IconPrevious } from "../../../icon/Svgs";

export const ProductImage = (props) => {
  return (
    <div>
      {/* desketop */}
      <div className="product-img product-img-desk">
        <img
          className="image-main selectDisable image-main-mobile"
          src={props.selectedImage}
          alt="product1"
          onClick={props.setVisiblePreview}
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
      {/* mobile */}
      <div className="product-img product-img-mobile">
        <div
          className="icon-previous icon-previous-mobile"
          onClick={() => {
            props.currentImageIndex > 0 &&
              props.setCurrentImageIndex(props.currentImageIndex - 1);
          }}
        >
          <IconPrevious />
        </div>
        <img
          className="image-main selectDisable image-main-mobile"
          src={props.selectedImage}
          alt="product1"
        />
        <div
          className="icon-next icon-next-mobile"
          onClick={() => {
            props.currentImageIndex < props.images.length - 1 &&
              props.setCurrentImageIndex(props.currentImageIndex + 1);
          }}
        >
          <IconNext className="selectDisable" />
        </div>
      </div>
    </div>
  );
};
