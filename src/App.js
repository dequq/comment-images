import React, { useEffect, useState } from "react";
import { endpoints } from "./constants";
import ImageItem from "./components/ImageItem";
import Modal from "./components/Modal";
import "./index.scss";

const App = () => {
  const [images, setImages] = useState();
  const [image, setImage] = useState();
  const [openModal, setOpenModal] = useState(false);

  const fetchAllImages = async () => {
    const response = await fetch(endpoints.getImages);
    const images = await response.json();
    setImages(images);
  };

  const fetchImage = async (id) => {
    const response = await fetch(endpoints.getImage + id);
    const imageWithComments = await response.json();
    return imageWithComments;
  };

  const handleOpenModal = async (id) => {
    const imageWithComments = await fetchImage(id);
    setImage(imageWithComments);
    setOpenModal(true);
  };

  const handleSendComment = async (text, id) => {
    await fetch(`${endpoints.sendComment}/${id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Alexey Zhidkov",
        comment: text,
      }),
    });
  };

  useEffect(() => {
    fetchAllImages();
  }, []);

  return (
    <>
      <div className="app">
        <ImageItem images={images} handleOpenModal={handleOpenModal} />
        {openModal && (
          <Modal
            image={image}
            setOpenModal={setOpenModal}
            handleSendComment={handleSendComment}
          />
        )}
      </div>
    </>
  );
};

export default App;
