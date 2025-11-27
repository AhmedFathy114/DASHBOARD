import React from "react";

export default function ImageViewerModal({ imageUrl, onClose }) {
  if (!imageUrl) return null;

  return (
    // Backdrop to handle closing when clicking outside
    <div className="image-modal-backdrop" onClick={onClose}>
      <div className="image-viewer-box" onClick={(e) => e.stopPropagation()}>
        {/* Close Button (X icon) */}
        <i className="fa-solid fa-xmark close-icon" onClick={onClose}></i>
        <div className="image-viewer-content">
          <img src={imageUrl} alt="Profile Preview" />
        </div>
      </div>
    </div>
  );
}
