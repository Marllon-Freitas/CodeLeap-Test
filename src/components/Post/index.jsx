import { PostContent } from "./styled";
import PropTypes from "prop-types";
import EditPost from "../../assets/edit.svg";
import DeletePost from "../../assets/delete.svg";
import { useState } from "react";
import ConfirmDeleteModal from "../ConfirmDeleteModal";
import UpdatePostModal from "../UpdatePostModal";
import { formatPostDate } from "../../utils/formatPostDate";

Post.propTypes = {
  postId: PropTypes.string.isRequired,
  postTitle: PropTypes.string.isRequired,
  postContent: PropTypes.string.isRequired,
  postUsername: PropTypes.string.isRequired,
  isPostOwner: PropTypes.bool,
  postDate: PropTypes.string.isRequired,
  handleGetPost: PropTypes.func,
};

function Post({
  postId,
  postTitle,
  postContent,
  postUsername,
  isPostOwner,
  postDate,
  handleGetPost,
}) {
  const [isModalDeleteOpened, setIsModalDeleteOpened] = useState(false);
  const [isModalEditOpened, setIsModalEditOpened] = useState(false);

  const toggleDeleteModalConfirmation = () => {
    setIsModalDeleteOpened(!isModalDeleteOpened);
  };

  const toggleEditModalConfirmation = () => {
    setIsModalEditOpened(!isModalEditOpened);
  };

  const handleEditPost = () => {
    setIsModalEditOpened(true);
  };

  return (
    <PostContent>
      <header className="post-header">
        <div className="header-title" title={postTitle}>
          <h1>{postTitle}</h1>
        </div>
        {isPostOwner && (
          <div className="header-actions">
            <button
              onClick={() => {
                toggleDeleteModalConfirmation();
              }}
              title="Delete Post"
            >
              <i>
                <img src={DeletePost} alt="Delete Post" />
              </i>
            </button>
            <button
              onClick={() => {
                handleEditPost();
              }}
              title="Edit Post"
            >
              <i>
                <img src={EditPost} alt="Edit Post" />
              </i>
            </button>
          </div>
        )}
      </header>
      <main>
        <header className="post-content-header">
          <h2>@{postUsername}</h2>
          <span>{formatPostDate(postDate)}</span>
        </header>
        <div className="post-content-text">
          <p>{postContent}</p>
        </div>
      </main>
      <ConfirmDeleteModal
        id={postId}
        toggleDeleteModalConfirmation={toggleDeleteModalConfirmation}
        isOpened={isModalDeleteOpened}
        onClose={() => {
          setIsModalDeleteOpened(false);
        }}
        handleGetPost={handleGetPost}
      />
      <UpdatePostModal
        id={postId}
        toggleEditModalConfirmation={toggleEditModalConfirmation}
        isOpened={isModalEditOpened}
        onClose={() => {
          setIsModalEditOpened(false);
        }}
        postData={{
          title: postTitle,
          content: postContent,
        }}
        handleGetPost={handleGetPost}
      />
    </PostContent>
  );
}

export default Post;
