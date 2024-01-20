import useApi from "../hooks/useApi";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import PostCard from "./Postcard";

export default function PostList() {
  const { loading, error, dataApi } = useApi();

  return (
    <>
      <div className="wrapper">
        {loading && <Loader />}
        {error && <ErrorMessage error={error} />}
        {dataApi.length &&
          dataApi.map((post) => <PostCard post={post} key={post.id} />)}
      </div>
    </>
  );
}