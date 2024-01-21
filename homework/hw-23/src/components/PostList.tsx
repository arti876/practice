import postListStyle from "./PostList.module.css";
import useApi from "../hooks/useApi";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import PostCardLarge from "./PostCard/PostcardLarge/PostcardLarge";
import PostCardMedium from "./PostCard/PostcardMedium/PostcardMedium";
import PostCardSmall from "./PostCard/PostcardSmall/PostcardSmall";

export default function PostList() {
  const { loading, error, dataApi } = useApi();

  return (
    <>
      <div className="wrapper">
        {loading && <Loader />}
        {error && <ErrorMessage error={error} />}
        <div className={postListStyle.postList}>
          <div className={postListStyle.LargeMedium}>
            <div className={postListStyle.postsLarge}>
              {dataApi.length && (
                <PostCardLarge post={dataApi[4]} key={dataApi[5].id} />
              )}
            </div>
            <div className={postListStyle.postsMedium}>
              {dataApi.length &&
                dataApi.map((post) => (
                  <PostCardMedium post={post} key={post.id} />
                ))}
            </div>
          </div>
          <div className={postListStyle.postsSmall}>
            {dataApi.length &&
              dataApi.map((post) => (
                <PostCardSmall post={post} key={post.id} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
