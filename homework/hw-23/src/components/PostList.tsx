import useApi from "../hooks/useApi";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import PostCard from "./PostCard";

export default function PostList() {
  const { loading, error, dataApi } = useApi();

  console.log(posts)

  return (
    <>
      <div className="wrapper">
        {loading && <Loader />}
        {error && <ErrorMessage error={error} />}
        {/* <PostCard post={posts} /> */}
        {dataApi.length && dataApi.map((post) => <PostCard post={post} key={post.id} />)}
      </div>
    </>
  );
}