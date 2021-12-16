/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { IconClose, IconNext, IconPrevious } from "../../../icon/Svgs";
import { inital_images } from "./../ProductGallery";

export const ProductPreviewPopup = ({ visible, onClose, index }) => {
  const [images, setImages] = useState(inital_images);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const selectedImage = images[currentImageIndex].img;

  useEffect(() => {
    const imagesTemp = images.map((x, i) =>
      i === currentImageIndex ? { ...x, active: true } : { ...x, active: false }
    );

    setImages(imagesTemp);
  }, [currentImageIndex]);

  useEffect(() => {
    setCurrentImageIndex(index);
  }, [index]);

  return (
    visible && (
      <div className="carousel" onClick={onClose}>
        <div className="product-img" onClick={(e) => e.stopPropagation()}>
          <div className="icon-close" onClick={onClose}>
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
            <img
              className="image-main selectDisable"
              src={selectedImage}
              alt="product1"
            />
            <div
              className="icon-next"
              onClick={() => {
                currentImageIndex < images.length - 1 &&
                  setCurrentImageIndex(currentImageIndex + 1);
              }}
            >
              <IconNext className="selectDisable" />
            </div>
          </div>
          <div className="carousel-images">
            {images.map((x, index) => (
              <div key={x.id} className="images-product">
                <img
                  className={`img-product ${x.class} selectDisable`}
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
    )
  );
};
