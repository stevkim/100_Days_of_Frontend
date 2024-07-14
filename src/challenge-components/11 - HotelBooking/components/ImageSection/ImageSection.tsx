import { useMemo, useState } from "react";
import DisplayImage from "./DisplayImage";
import ImageList from "./ImageList";

interface ImageSectionProps {
  images: string[];
  location: { name: string; address: string };
}

const ImageSection = ({ images, location }: ImageSectionProps) => {
  const [displayImage, setDisplayImage] = useState(images[0]);

  const remainingImages = useMemo(
    () => images.filter((item) => item !== displayImage),
    [images, displayImage],
  );

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    image: string,
  ) => {
    e.preventDefault();
    setDisplayImage(image);
  };

  return (
    <div className="flex h-full w-full flex-col gap-2 md:w-[55%]">
      <DisplayImage image={displayImage} location={location} />
      <ImageList list={remainingImages} handleClick={handleClick} />
    </div>
  );
};

export default ImageSection;
