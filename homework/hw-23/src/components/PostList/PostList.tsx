import postListStyle from "./PostList.module.css";
import useApi from "../../hooks/useApi";
import PostCardLarge from "../PostCard/Postcard";
import { PostSize } from "../../models";

export default function PostList() {
  const { loading, error, dataApi } = useApi();

  return (
    <>
      <div className="wrapper">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div className={postListStyle.postList}>
          <div className={postListStyle.LargeMedium}>
            <div className={postListStyle.postsLarge}>
              {dataApi.length && (
                <PostCardLarge
                  post={dataApi[4]}
                  size={PostSize.Large}
                  key={dataApi[5].id}
                />
              )}
            </div>
            <div className={postListStyle.postsMedium}>
              {dataApi.length &&
                dataApi.map((post) => (
                  <PostCardLarge
                    post={post}
                    size={PostSize.Medium}
                    key={post.id}
                  />
                ))}
            </div>
          </div>
          <div className={postListStyle.postsSmall}>
            {dataApi.length &&
              dataApi.map((post) => (
                <PostCardLarge
                  post={post}
                  size={PostSize.Small}
                  key={post.id}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
