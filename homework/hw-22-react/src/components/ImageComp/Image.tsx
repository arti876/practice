import ImageWarning from "../../img/warning.svg?react";
import ImageBell from "../../img/bell.svg?react";
import ImageForbidden from "../../img/forbidden.svg?react";
import ImageInfo from "../../img/info.svg?react";
import ImageTick from "../../img/tick.svg?react";

interface ImageProps {
  name: string;
  className: string;
}

const Image = ({ name, className }: ImageProps) => {
  if (name === "image-warning") return <ImageWarning className={className} />;
  if (name === "image-bell") return <ImageBell className={className} />;
  if (name === "image-forbidden")
    return <ImageForbidden className={className} />;
  if (name === "image-info") return <ImageInfo className={className} />;
  if (name === "image-tick") return <ImageTick className={className} />;
};

export default Image;
