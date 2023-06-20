import ReactDom from "react-dom";
import { Overlay, ModalContent } from "./styled";
import PropTypes from "prop-types";

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

function Modal({ children, isOpened, onClose }) {
  if (!isOpened) return null;

  return ReactDom.createPortal(
    <>
      <Overlay onClick={onClose} />
      <ModalContent className="modal">
        {children}
      </ModalContent>
    </>,
    document.getElementById("modal")
  );
}

export default Modal;
