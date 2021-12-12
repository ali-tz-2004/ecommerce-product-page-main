import { useState } from "react/cjs/react.development";
import { IconClose, IconNext, IconPrevious } from "../../icon/Svgs";
import * as img from "../../images/images";
export const ProductGallery = () => {
  const [images, setImages] = useState([
    { id: 1, img: img.img_product_1, class: "img_product_1", active: true },
    { id: 2, img: img.img_product_2, class: "img_product_2", active: false },
    { id: 3, img: img.img_product_3, class: "img_product_3", active: false },
    { id: 4, img: img.img_product_4, class: "img_product_4", active: false },
  ]);

  const [currImage, setCurrImage] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[currImage].img);
  const [checkedImage, setCheckedImage] = useState(false);

  const onClickImage = (img, index) => {
    if (checkedImage) {
      index = currImage;
    }
    setSelectedImage(img);
    setImages(
      images.map((x, i) =>
        i === index ? { ...x, active: true } : { ...x, active: false }
      )
    );
    setCurrImage(index);
    console.log("index" + index);
    console.log("img" + img);
  };

  const openImageMain = () => {
    setCheckedImage(true);
  };

  const closeImage = () => {
    setCheckedImage(false);
  };

  return (
    <div className="product-gallery">
      <div className="product-img">
        <img
          className="image-main"
          src={selectedImage}
          alt="product1"
          onClick={openImageMain}
        />
        {images.map((x, index) => (
          <div key={x.id} className="images-product">
            <img
              className={`img-product ${x.class}`}
              src={x.img}
              alt="products"
              onClick={() => onClickImage(x.img, index)}
            />
            {x.active && <div className={`layer img-layer`}></div>}
          </div>
        ))}
      </div>
      {checkedImage && (
        <div className="carousel">
          <div className="product-img">
            <div className="icon-close">
              <IconClose onClick={closeImage} />
            </div>
            {console.log(currImage)}
            <div className="carousel-img-main">
              <div
                className="icon-previous"
                onClick={() => {
                  currImage > 0 && setCurrImage(currImage - 1);
                }}
              >
                <IconPrevious />
              </div>
              <img
                className="image-main"
                src={selectedImage}
                alt="product1"
                onClick={openImageMain}
              />
              <div
                className="icon-next"
                onClick={() => {
                  currImage < images.length - 1 && setCurrImage(currImage + 1);
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
                    onClick={() => onClickImage(x.img, index)}
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
