import { useState } from "react";
import DisplayImage from "./DisplayImage";
import ImageCarousel from "./ImageCarousel";
import { IMAGES } from "./imageData";

const ImageCarouselPage = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);

  // const currentImage = useMemo(() => {
  //   return IMAGES[imageIndex];
  // }, [imageIndex])

  const currentImage = IMAGES[imageIndex];

  const handleClick = (index: number) => {
    setImageIndex(index);
  };

  const incrementIndex = () => {
    if (imageIndex + 1 >= IMAGES.length) {
      setImageIndex(0);
    } else {
      setImageIndex((prev) => prev + 1);
    }
  };

  const decrementIndex = () => {
    if (imageIndex - 1 < 0) {
      setImageIndex(IMAGES.length - 1);
    } else {
      setImageIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="h-page w-full bg-black">
      <DisplayImage
        display={currentImage}
        controls={{ incrementIndex, decrementIndex }}
      />
      <ImageCarousel
        currentIndex={imageIndex}
        handleClick={handleClick}
        images={IMAGES}
      />
    </section>
  );
};

export default ImageCarouselPage;