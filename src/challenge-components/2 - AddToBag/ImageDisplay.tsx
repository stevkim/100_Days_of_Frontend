import { useState } from "react";
import ImageThumbnails from "./ImageThumbnails";

interface Props {
  images: string[];
}

const ImageDisplay = ({ images }: Props) => {
  const [active, setActive] = useState<string>(images[0]);

  const handleClick = (newImage: string) => {
    setActive(newImage);
  };

  return (
    <div className="flex w-full justify-center gap-2 p-2 lg:w-[50%]">
      <ImageThumbnails images={images} handleClick={handleClick} />
      <div className="w-[85%] overflow-hidden">
        <img
          src={active}
          alt="Image of the product"
          className="h-full w-full rounded-sm object-cover"
        />
      </div>
    </div>
  );
};

export default ImageDisplay;
