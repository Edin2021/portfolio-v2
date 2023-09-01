import ReactDOM from "react-dom";
import { loadIcon } from "../../composables/iconLoader";

const Modal = ({ isOpen, onClose, children, classes }) => {
  const clickOutside = (e) =>
    e.target.classList.contains("to-close") && onClose();
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={`modal-overlay to-close ${classes}`} onClick={clickOutside}>
      <div className="modal">
        <button className="close-button to-close" onClick={onClose}>
          <span className="visually-hidden">Close modal</span>
          <img src={loadIcon["close"]} alt="" />
        </button>
        {children}
      </div>
      <span className="separator-under to-close"></span>
    </div>,
    document.getElementById("root")
  );
};

export default Modal;
