import React from "react";
import "./image.scss";

const ImageItem = ({ images, handleOpenModal }) => {
  return (
    <>
      {images?.map((item) => {
        return (
          <div
            className="img"
            key={item.id}
            onClick={() => handleOpenModal(item.id)}
          >
            <img className="img__block" src={item.url} alt={item.id} />
          </div>
        );
      })}
    </>
  );
};

export default ImageItem;
