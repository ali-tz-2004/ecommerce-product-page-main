import { useState } from "react";
import * as img from "../../images/images";
export const ProductGallery = () => {
  const [images, setImages] = useState([
    { id: 1, img: img.img_product_1, class: "img_product_1", active: true },
    { id: 2, img: img.img_product_2, class: "img_product_2", active: false },
    { id: 3, img: img.img_product_3, class: "img_product_3", active: false },
    { id: 4, img: img.img_product_4, class: "img_product_4", active: false },
  ]);

  const [selectedImage, setSelectedImage] = useState(images[0].img);

  return (
    <div className="product-gallery">
      <div className="product-img">
        <img className="image-main" src={selectedImage} alt="product1" />
        {images.map((x, index) => (
          <div key={x.id} className="images-product">
            <img
              className={`img-product ${x.class}`}
              src={x.img}
              alt="products"
              onClick={() => {
                setSelectedImage(x.img);
                setImages(
                  images.map((x, i) =>
                    i === index
                      ? { ...x, active: true }
                      : { ...x, active: false }
                  )
                );
              }}
            />
            {x.active && <div className={`layer img-layer`}></div>}
          </div>
        ))}
      </div>
    </div>
  );
};
