import React from "react";

const ImageItem = ({ images, handleOpenModal }) => {
  return (
    <>
      {images?.map((item) => {
        return (
          <div key={item.id} onClick={() => handleOpenModal(item.id)}>
            <img src={item.url} alt={item.id} />
          </div>
        );
      })}
    </>
  );
};

export default ImageItem;
