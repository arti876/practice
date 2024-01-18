import { IPost } from "../models";
import Icons from "./Icons/Icons";
import Button from "./Button";
import { useEffect, useState } from "react";
interface PostProps {
  post: IPost;
}

export default function PostCard({ post }: PostProps) {
  const [countLike, setCountLike] = useState(0);
  const [countDislike, setCountDislike] = useState(0);
  const { title, date, description, image } = post;

  function countFun(type) {
    if (type === "like") {
      setCountLike((prev) => prev + 1);
    } else {
      setCountDislike((prev) => prev + 1);
    }
  }

  return (
    <div className="post-card">
      <div className="post-card-top">
        <div className="post-content-text">
          <p className="post-date">{date}</p>
          <h1 className="post-title">{title}</h1>
          <p className="post-description">{description}</p>
        </div>
        <div className="post-img-container">
          <img className="post-img" src={image} alt="img" />
        </div>
      </div>
      <div className="post-card-bottom">
        <div className="post-card-bottom-left">
          <div className="rating">
            <Button onClick={() => countFun("like")}>
              <Icons
                className={`ico-like-default ${countLike > 0 && "ico-like"}`}
                id="like"
              />
            </Button>
            <span className="count">{!!countLike && countLike}</span>
          </div>
          <div className="rating">
            <Button onClick={() => countFun("dislike")}>
              <Icons
                className={`ico-dislike-default ${
                  countDislike > 0 && "ico-dislike"
                }`}
                id="like"
              />
            </Button>
            <span className="count">{!!countDislike && countDislike}</span>
          </div>
        </div>
        <div className="post-card-bottom-right">
          <Button>
            <Icons className="ico-bookmark" id="bookmark" />
          </Button>
          <Button>...</Button>
        </div>
      </div>
    </div>
  );
}
