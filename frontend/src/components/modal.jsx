import React from "react";
import './modal.css';

function Modal({closeModal, children }) {
  return (
    <div id="modal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        {children}
      </div>
    </div>
  );
}

export default Modal
