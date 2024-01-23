import stylePosrcard from "./Postcard.module.css";
import { IPost } from "../../models";
import Icons from "../Icons/Icons";
import Button from "../Button";
import { useState } from "react";
import { PostSize } from "../../models";

interface PostProps {
  post: IPost;
  size: PostSize;
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
    size === PostSize.Large
      ? PostSize.Large
      : size === PostSize.Medium
      ? PostSize.Medium
      : size === PostSize.Small
      && PostSize.Small;

  return (
    <div className={`${stylePosrcard["post-card"]} ${stylePosrcard["post-card--" + postSize]}`}>
      <div className={stylePosrcard["post-card-top--" + postSize]}>
        <div className={stylePosrcard["post-content-text"]}>
          <p className={stylePosrcard["post-date"]}>{date}</p>
          <h1 className={stylePosrcard["post-title--" + postSize]}>{title}</h1>
          {postSize === PostSize.Large && <p className={stylePosrcard["post-description"]}>{description}</p>}
        </div>
        <div className={stylePosrcard["post-img-container--" + postSize]}>
          <img className={stylePosrcard["post-img"]} src={image} alt="img" />
        </div>
      </div>
      <div className={stylePosrcard["post-card-bottom"]}>
        <div className={stylePosrcard["post-card-bottom-left"]}>
          <div className={stylePosrcard["rating"]}>
            <Button onClick={() => handleLikeDislike("like")}>
              <Icons
                className={`${stylePosrcard["ico-like-default"]} ${
                  likeDislike.like && stylePosrcard["ico-like"]
                }`}
                id="like"
              />
            </Button>
            <span className={stylePosrcard["count"]}>
              {likeDislike.like && likeDislike.likeCount}
            </span>
          </div>
          <div className={stylePosrcard["rating"]}>
            <Button onClick={() => handleLikeDislike("dislike")}>
              <Icons
                className={`${stylePosrcard["ico-dislike-default"]} ${
                  likeDislike.dislike && stylePosrcard["ico-dislike"]
                }`}
                id="like"
              />
            </Button>
            <span className={stylePosrcard["count"]}>
              {likeDislike.dislike && likeDislike.dislikeCount}
            </span>
          </div>
        </div>
        <div className={stylePosrcard["post-card-bottom-right"]}>
          <Button onClick={() => setBookmark(!bookmark)}>
            <Icons
              className={`${stylePosrcard["ico-bookmark"]} ${
                bookmark && stylePosrcard["ico-bookmark-active"]
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
