import ImageLike from "../img/like.svg"

interface ImageProps {
  name: string
  className: string
}

export default const Image = ({ name, className }: ImageProps) => {
  if (name === "image-warning") return <ImageLike className={className} />
}
