import defaultStyle from "./Postcard.default.module.css";
import mediumStyle from "./Postcard.default.module.css";
import smallStyle from "./Postcard.medium.module.css";
import largeStyle from "./Postcard.large.module.css";
import { IPost } from "../../models";
import Icons from "../Icons/Icons";
import Button from "../Button";
import { useState } from "react";

interface PostProps {
  post: IPost;
  size: string;
}

export default function PostCardLarge({ post, size }: PostProps) {
  const [bookmark, setBookmark] = useState(false);
  const [likeDislike, setLikeDislike] = useState({
    like: false,
    likeCount: 1,
    dislike: false,
    dislikeCount: 1,
  });
  const { title, date, description, image } = post;

  function handleLikeDislike(type: string) {
    if (type === "like") {
      setLikeDislike((prev) => ({
        ...prev,
        like: !likeDislike.like,
        dislike: false,
      }));
    } else {
      setLikeDislike((prev) => ({
        ...prev,
        like: false,
        dislike: !likeDislike.dislike,
      }));
    }
  }

  const postSize =
    size === "large"
      ? "large"
      : size === "medium"
      ? "medium"
      : size === "small"
      ? "small"
      : "";

  return (
    <div className={defaultStyle["post-card--" + postSize]}>
      <div className={defaultStyle.postCardTop}>
        <div className={defaultStyle["post-content-text--" + postSize]}>
          <p className={defaultStyle["post-date"]}>{date}</p>
          <h1 className={defaultStyle["post-title" + postSize]}>{title}</h1>
          <p className={defaultStyle["post-description"]}>{description}</p>
        </div>
        <div className={defaultStyle["post-img-container"]}>
          <img className={defaultStyle["post-img"]} src={image} alt="img" />
        </div>
      </div>
      <div className={defaultStyle["post-card-bottom"]}>
        <div className={defaultStyle["post-card-bottom-left"]}>
          <div className={defaultStyle["rating"]}>
            <Button onClick={() => handleLikeDislike("like")}>
              <Icons
                className={`${defaultStyle["ico-like-default"]} ${
                  likeDislike.like && defaultStyle["ico-like"]
                }`}
                id="like"
              />
            </Button>
            <span className={defaultStyle["count"]}>
              {likeDislike.like && likeDislike.likeCount}
            </span>
          </div>
          <div className={defaultStyle["rating"]}>
            <Button onClick={() => handleLikeDislike("dislike")}>
              <Icons
                className={`${defaultStyle["ico-dislike-default"]} ${
                  likeDislike.dislike && defaultStyle["ico-dislike"]
                }`}
                id="like"
              />
            </Button>
            <span className={defaultStyle["count"]}>
              {likeDislike.dislike && likeDislike.dislikeCount}
            </span>
          </div>
        </div>
        <div className={defaultStyle["post-card-bottom-right"]}>
          <Button onClick={() => setBookmark(!bookmark)}>
            <Icons
              className={`${defaultStyle["ico-bookmark"]} ${
                bookmark && defaultStyle["ico-bookmark-active"]
              }`}
              id="bookmark"
            />
          </Button>
          <Button>...</Button>
        </div>
      </div>
    </div>
  );
}
