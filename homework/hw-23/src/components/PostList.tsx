import usePosts from "../hooks/usePosts";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import PostCard from "./PostCard";

export default function PostList() {
  const { loading, error, posts } = usePosts();

  return (
    <>
      <div className="wrapper">
        {loading && <Loader />}
        {error && <ErrorMessage error={error} />}
        <PostCard post={posts} />
      </div>
    </>
  );
}