import usePosts from "../hooks/usePosts";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import Postcard from "./Postcard";

export default function PostList() {
  const { loading, error, posts } = usePosts();

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      <Postcard post={posts} />
    </>
  );
}
