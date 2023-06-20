import ReactDom from "react-dom";
import { Button } from "../BaseButton";
import PropTypes from "prop-types";
import { Overlay, ModalContent } from "./styled";
import { deletePost } from "../../actions/deletePost";

ConfirmDeleteModal.propTypes = {
  id: PropTypes.string.isRequired,
  toggleDeleteModalConfirmation: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  handleGetPost: PropTypes.func,
};

function ConfirmDeleteModal({
  id,
  toggleDeleteModalConfirmation,
  isOpened,
  onClose,
  handleGetPost
}) {
  if (!isOpened) return null;
  const handleDeletePost = () => {
    deletePost(id)
      .then(() => {
        console.log("Post deleted");
        toggleDeleteModalConfirmation(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        handleGetPost();
        toggleDeleteModalConfirmation(false);
      });
  };
  return ReactDom.createPortal(
    <>
      <Overlay onClick={onClose} />
      <ModalContent className="modal">
        <h1>Are you sure you want to delete this post?</h1>
        <div className="modal-actions">
          <Button
            onClick={() => {
              toggleDeleteModalConfirmation(false);
              console.log("Cancel");
            }}
            actiontype={"default"}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleDeletePost(false);
            }}
            actiontype={"cancel"}
          >
            Delete
          </Button>
        </div>
      </ModalContent>
    </>,
    document.getElementById("modal")
  );
}

export default ConfirmDeleteModal;
