import React, { useState } from "react";
import "./Modal.scss";

const Modal = ({ image, setOpenModal, handleSendComment }) => {
  const [text, setText] = useState("");

  return (
    <>
      <div className="modal" onClick={() => setOpenModal(false)}>
        <div
          className="modal-block"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="modal-block__body">
            <div className="modal-block__image">
              <img src={image.url} alt={image.id} />
            </div>
            {image?.comments.length !== 0 && (
              <div className="modal-block__comments">
                <span>Comments:</span>
                {image?.comments.map((item) => {
                  return (
                    <div key={item.id} className="modal-block__comments_item">
                      <span>{item.text}</span>
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="modal-block__form">
            <span>Comment</span>
            <textarea
              name="add-comment"
              cols="30"
              rows="8"
              onChange={(e) => setText(e.target.value)}
            />
            <span>Write a few sentences about the photo.</span>
          </div>
          <div className="modal-block__button">
            <button onClick={() => handleSendComment(text, image.id)}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
