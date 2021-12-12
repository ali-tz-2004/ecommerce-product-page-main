export const ProductImage = (props) => {
  return (
    <div className="product-img">
      <img
        className="image-main selectDisable"
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
