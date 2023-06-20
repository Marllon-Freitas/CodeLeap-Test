import { useCallback, useEffect, useState } from "react";
import CreatePost from "../../components/CreatePost";
import Post from "../../components/Post";
import { HomeWrapper, HomeContent } from "./styled";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { getPosts } from "../../actions/getPosts";
import Logout from "../../assets/logout.svg";

function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleGetPost = useCallback(
    (addPosts = false, limit = 10, offset = 0) => {
      getPosts(limit, offset)
        .then((response) => {
          if (addPosts) {
            setPosts((currentPosts) => [...currentPosts, ...response]);
          } else {
            setPosts(response);
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    []
  );

  useEffect(() => {
    handleGetPost();
  }, [handleGetPost]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollPosition = scrollTop + clientHeight;

      if (scrollPosition + 10 >= scrollHeight) {
        handleGetPost(true, 10, posts.length);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleGetPost, posts.length]);

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <HomeWrapper>
      <HomeContent>
        <header className="home-header">
          <h1>CodeLeap Network</h1>
          <button onClick={handleLogout} title="Logout">
            <img src={Logout} alt="Logout" />
          </button>
        </header>
        <main>
          <CreatePost handleGetPost={handleGetPost} />

          {isLoading ? (
            <Loader />
          ) : (
            posts &&
            posts.map((post, index) => {
              return (
                <Post
                  key={`${post.id}-${index}`}
                  postId={post.id}
                  postTitle={post.title}
                  postContent={post.content}
                  postUsername={post.username}
                  isPostOwner={
                    post.username === localStorage.getItem("username")
                  }
                  postDate={post.created_datetime}
                  handleGetPost={handleGetPost}
                />
              );
            })
          )}
        </main>
      </HomeContent>
    </HomeWrapper>
  );
}

export default Home;
