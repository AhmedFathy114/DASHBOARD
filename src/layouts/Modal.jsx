export default function Modal({ show, onClose, children }) {
    if (!show) return null;
    return (
        <div className="overlay" onClick={onClose}>
        <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <i className="fa-regular fa-circle-xmark close-btn fa-2x " onClick={onClose}></i>
            {children}
        </div>
        </div>
    );
}
