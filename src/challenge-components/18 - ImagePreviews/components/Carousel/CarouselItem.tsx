import { TImage } from "../../types/imageType";
import { useContext } from "react";
import { ImageListcontext } from "../../ImagePreview";
import { motion } from "framer-motion";

interface CarouselItemProps {
  index: number;
  image: TImage;
}

const CarouselItem = ({ image, index }: CarouselItemProps) => {
  const {
    controls: { setIndex },
  } = useContext(ImageListcontext);

  const handleClick = (input: number) => {
    setIndex(input);
  };

  return (
    <motion.button
      className="aspect-video h-full"
      onClick={() => handleClick(index)}
      key={image.id}
    >
      <img
        src={image.image}
        alt={image.title}
        className="pointer-events-none h-full w-full rounded-lg object-cover"
      />
    </motion.button>
  );
};

export default CarouselItem;
