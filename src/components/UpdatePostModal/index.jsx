import ReactDom from "react-dom";
import { Button } from "../BaseButton";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Overlay, ModalContent } from "./styled";
import { updatePost } from "../../actions/updatePost";

UpdatePostModal.propTypes = {
  id: PropTypes.string.isRequired,
  toggleEditModalConfirmation: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  postData: PropTypes.object.isRequired,
  handleGetPost: PropTypes.func,
};

function UpdatePostModal({
  id,
  toggleEditModalConfirmation,
  isOpened,
  onClose,
  postData,
  handleGetPost,
}) {
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (id && postData) {
      setValue("title", postData.title);
      setValue("content", postData.content);
    }
  }, [id, postData, setValue]);

  if (!isOpened) return null;

  const handleEditPost = (data) => {
    const dataToSubmit = {
      ...data,
      username: localStorage.getItem("username"),
    };
    updatePost(id, dataToSubmit)
      .then(() => {
        handleGetPost();
        toggleEditModalConfirmation(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return ReactDom.createPortal(
    <>
      <Overlay onClick={onClose} />
      <ModalContent className="modal">
        <h1>Edit Post</h1>
        <form onSubmit={handleSubmit(handleEditPost)}>
          <div className="input-area">
            <label htmlFor="username">Title</label>
            <input
              type="text"
              placeholder="Jhon Doe"
              id="title"
              {...register("title", { required: true })}
            />
          </div>
          <div className="input-area">
            <label htmlFor="content">Post</label>
            <textarea
              type="text"
              placeholder="Content Here"
              id="content"
              maxLength={4096}
              {...register("content", { required: true })}
            />
          </div>
          <div className="modal-actions">
            <Button
              onClick={() => {
                toggleEditModalConfirmation(false);
              }}
              actiontype={"default"}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                handleEditPost(false);
              }}
              actiontype={"confirm"}
            >
              Save
            </Button>
          </div>
        </form>
      </ModalContent>
    </>,
    document.getElementById("modal")
  );
}

export default UpdatePostModal;
