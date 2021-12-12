/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react/cjs/react.development";
import { IconClose, IconNext, IconPrevious } from "../../icon/Svgs";
import * as img from "../../images/images";
import { ProductImage } from "../../utils/utils";
export const ProductGallery = () => {
  const [images, setImages] = useState([
    { id: 1, img: img.img_product_1, class: "img_product_1", active: true },
    { id: 2, img: img.img_product_2, class: "img_product_2", active: false },
    { id: 3, img: img.img_product_3, class: "img_product_3", active: false },
    { id: 4, img: img.img_product_4, class: "img_product_4", active: false },
  ]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visiblePreview, setVisiblePreview] = useState(false);
  const selectedImage = images[currentImageIndex].img;

  useEffect(() => {
    const imagesTemp = images.map((x, i) =>
      i === currentImageIndex ? { ...x, active: true } : { ...x, active: false }
    );

    setImages(imagesTemp);
  }, [currentImageIndex]);

  useEffect(() => {
    if (visiblePreview) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "scroll";
  }, [visiblePreview]);

  return (
    <div className="product-gallery">
      <ProductImage
        selectedImage={selectedImage}
        setVisiblePreview={setVisiblePreview}
        images={images}
        setCurrentImageIndex={setCurrentImageIndex}
      />
      {visiblePreview && (
        <div className="carousel">
          <div className="product-img">
            <div
              className="icon-close"
              onClick={() => setVisiblePreview(false)}
            >
              <IconClose />
            </div>
            <div className="carousel-img-main">
              <div
                className="icon-previous"
                onClick={() => {
                  currentImageIndex > 0 &&
                    setCurrentImageIndex(currentImageIndex - 1);
                }}
              >
                <IconPrevious />
              </div>
              <img className="image-main" src={selectedImage} alt="product1" />
              <div
                className="icon-next"
                onClick={() => {
                  currentImageIndex < images.length - 1 &&
                    setCurrentImageIndex(currentImageIndex + 1);
                }}
              >
                <IconNext />
              </div>
            </div>
            <div className="carousel-images">
              {images.map((x, index) => (
                <div key={x.id} className="images-product">
                  <img
                    className={`img-product ${x.class}`}
                    src={x.img}
                    alt="products"
                    onClick={() => setCurrentImageIndex(index)}
                  />
                  {x.active && <div className={`layer img-layer`}></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
