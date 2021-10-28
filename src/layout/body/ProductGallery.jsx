import * as img from "../../images/images";
export const ProductGallery = () => {
  const images = [
    { id: 1, img: img.img_product_1, class: "img_product_1" },
    { id: 2, img: img.img_product_2, class: "img_product_2" },
    { id: 3, img: img.img_product_3, class: "img_product_3" },
    { id: 4, img: img.img_product_4, class: "img_product_4" },
  ];
  return (
    <div className="product-gallery">
      <div className="product-img">
        <img className="image-main" src={img.img_product_1} alt="product1" />
        {images.map((x) => (
          <div key={x.id} className="images-product">
            <img
              className={`img-product p-${x.class}`}
              src={x.img}
              alt="products"
            />
            <div className={`layer img-layer l-${x.class}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};
