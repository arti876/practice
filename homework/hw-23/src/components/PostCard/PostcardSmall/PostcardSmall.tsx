// import defaultStyle from "../Postcard.default.module.css";
// import smallStyle from "./Postcard.small.module.css";
// import { IPost } from "../../../models";
// import Icons from "../../Icons/Icons";
// import Button from "../../Button";
// import { useState } from "react";

// interface PostProps {
//   post: IPost;
// }

// export default function PostCardSmall({ post }: PostProps) {
//   const [bookmark, setBookmark] = useState(false);
//   const [likeDislike, setLikeDislike] = useState({
//     like: false,
//     likeCount: 1,
//     dislike: false,
//     dislikeCount: 1,
//   });
//   const { title, date, image } = post;

//   function handleLikeDislike(type: string) {
//     if (type === "like") {
//       setLikeDislike((prev) => ({
//         ...prev,
//         like: !likeDislike.like,
//         dislike: false,
//       }));
//     } else {
//       setLikeDislike((prev) => ({
//         ...prev,
//         like: false,
//         dislike: !likeDislike.dislike,
//       }));
//     }
//   }

//   return (
//     <div className={smallStyle.postCard}>
//       <div className={defaultStyle.postCardTop}>
//         <div className={defaultStyle.postContentText}>
//           <p className={defaultStyle.postDate}>{date}</p>
//           <h1 className={smallStyle.postTitle}>{title}</h1>
//         </div>
//         <div className={smallStyle.postImgContainer}>
//           <img className={defaultStyle.postImg} src={image} alt="img" />
//         </div>
//       </div>
//       <div className={defaultStyle.postCardBottom}>
//         <div className={defaultStyle.postCardBottomLeft}>
//           <div className={defaultStyle.rating}>
//             <Button onClick={() => handleLikeDislike("like")}>
//               <Icons
//                 className={`${defaultStyle.icoLikeDefault} ${
//                   likeDislike.like && defaultStyle.icoLike
//                 }`}
//                 id="like"
//               />
//             </Button>
//             <span className={defaultStyle.count}>
//               {likeDislike.like && likeDislike.likeCount}
//             </span>
//           </div>
//           <div className={defaultStyle.rating}>
//             <Button onClick={() => handleLikeDislike("dislike")}>
//               <Icons
//                 className={`${defaultStyle.icoDislikeDefault} ${
//                   likeDislike.dislike && defaultStyle.icoDislike
//                 }`}
//                 id="like"
//               />
//             </Button>
//             <span className={defaultStyle.count}>
//               {likeDislike.dislike && likeDislike.dislikeCount}
//             </span>
//           </div>
//         </div>
//         <div className={defaultStyle.postCardBottomRight}>
//           <Button onClick={() => setBookmark(!bookmark)}>
//             <Icons
//               className={`${defaultStyle.icoBookmark} ${
//                 bookmark && defaultStyle.icoBookmarkActive
//               }`}
//               id="bookmark"
//             />
//           </Button>
//           <Button>...</Button>
//         </div>
//       </div>
//     </div>
//   );
// }
