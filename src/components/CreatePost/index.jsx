import { Button } from "../BaseButton";
import { CreatePostWrapper, CreatePostContent } from "./styled";
import { useForm } from "react-hook-form";
import { createPost } from "../../actions/createPost";
import PropTypes from "prop-types";

CreatePost.propTypes = {
  handleGetPost: PropTypes.func,
};

function CreatePost({ handleGetPost }) {
  const { register, handleSubmit, watch, reset } = useForm();
  const watchAllFields = watch();

  const onSubmit = (data) => {
    const dataToSubmit = {
      ...data,
      username: localStorage.getItem("username"),
    };
    createPost(dataToSubmit)
      .then(() => {
        reset();
        console.log("Post created");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        handleGetPost();
      });
  };

  return (
    <CreatePostWrapper>
      <CreatePostContent>
        <h1>What’s on your mind?</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-area">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Jhon Doe"
              id="title"
              {...register("title", { required: true })}
            />
          </div>
          <div className="input-area">
            <label htmlFor="content">Content</label>
            <textarea
              type="text"
              placeholder="Content Here"
              id="content"
              maxLength={4096}
              {...register("content", { required: true })}
            />
          </div>
          <Button
            actiontype="primary"
            isDisabled={
              watchAllFields.title && watchAllFields.content ? false : true
            }
          >
            Create
          </Button>
        </form>
      </CreatePostContent>
    </CreatePostWrapper>
  );
}

export default CreatePost;
