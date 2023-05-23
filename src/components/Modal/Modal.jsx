import "./Modal.css";

const Modal = ({ isVisible, children }) => {
  if (!isVisible) return null;

  return <div className="modal__form">{children}</div>;
};

export default Modal;
