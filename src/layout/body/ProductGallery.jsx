/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react/cjs/react.development";
import * as img from "../../images/images";
import { ProductPreviewPopup } from "./components/ProductPreviewPopup";
import { ProductImage } from "./components/ProductImage";

export const inital_images = [
  { id: 1, img: img.img_product_1, class: "img_product_1", active: true },
  { id: 2, img: img.img_product_2, class: "img_product_2", active: false },
  { id: 3, img: img.img_product_3, class: "img_product_3", active: false },
  { id: 4, img: img.img_product_4, class: "img_product_4", active: false },
];

export const ProductGallery = () => {
  const [images, setImages] = useState(inital_images);

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
    if (visiblePreview) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "scroll";
  }, [visiblePreview]);

  return (
    <div className="product-gallery">
      <ProductImage
        selectedImage={selectedImage}
        setVisiblePreview={setVisiblePreview}
        images={images}
        setCurrentImageIndex={setCurrentImageIndex}
        currentImageIndex={currentImageIndex}
      />
      <ProductPreviewPopup
        visible={visiblePreview}
        onClose={() => setVisiblePreview(false)}
        index={currentImageIndex}
      />
    </div>
  );
};
