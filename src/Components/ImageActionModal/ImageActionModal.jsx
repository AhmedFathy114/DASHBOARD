import React from "react";

export default function ImageActionModal({
  isOpen,
  onClose,
  hasPhoto,
  onAction,
}) {
  if (!isOpen) return null;

  // menu options
  const menuOptions = hasPhoto ? (
    <>
      <button className="btn image-modal-btn" onClick={() => onAction("open")}>
        <i className="fa-regular fa-eye me-2"></i> Open Photo
      </button>
      <button
        className="btn image-modal-btn"
        onClick={() => onAction("change")}
      >
        <i className="fa-solid fa-pen-to-square me-2"></i> Change Photo
      </button>
      <button
        className="btn image-modal-btn delete-btn"
        onClick={() => onAction("delete")}
      >
        <i className="fa-regular fa-trash-can me-2"></i> Delete Photo
      </button>
    </>
  ) : (
    <button className="btn image-modal-btn" onClick={() => onAction("add")}>
      <i className="fa-solid fa-camera me-2"></i> Add Photo
    </button>
  );

  return (
    <div className="image-modal-backdrop" onClick={onClose}>

      <div className="image-modal-box" onClick={(e) => e.stopPropagation()}>
        {/* (X) button */}
        <i className="fa-solid fa-xmark close-icon" onClick={onClose}></i>

        {/* header box */}
        <h3>{hasPhoto ? "Manage Photo" : "Add Profile Photo"}</h3>

        {/* menu options */}
        <div className="d-flex flex-column align-items-center w-100">
          {menuOptions}
        </div>
      </div>
    </div>
  );
}
