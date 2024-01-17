import { IPost } from "../models";

interface PostProps {
  post: IPost;
}

export default function Postcard({ post }: PostProps) {
  return (
    <ul>
      <li>{post.title}</li>
      <li>{post.text}</li>
      <li>{post.date}</li>
      <li>{post.lesson_num}</li>
      <li>{post.description}</li>
      <li>{post.author}</li>
      <li>{post.image}</li>
    </ul>
  );
}
