import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface Props {
  images: string[];
  handleClick: (index: number) => void;
  currentIndex: number;
}

const ImageCarousel = ({ images, handleClick, currentIndex }: Props) => {
  const [carouselWidth, setCarouselWidth] = useState(0);

  const constraintsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (constraintsRef.current) {
      setCarouselWidth(
        constraintsRef.current?.scrollWidth -
          constraintsRef.current?.offsetWidth +
          images.length,
      );
    }
  }, [constraintsRef, images]);

  return (
    <motion.div
      className="h-[30%] w-full overflow-hidden p-4"
      ref={constraintsRef}
    >
      <motion.div
        drag="x"
        dragConstraints={{ left: -carouselWidth, right: 0 }}
        whileTap={{ cursor: "grabbing" }}
        className="flex h-full flex-row gap-4"
      >
        {images.map((image, index) => {
          return (
            <motion.button
              key={image}
              className={`aspect-square h-full ${currentIndex === index ? "border-2 border-white" : ""}`}
              onClick={() => {
                handleClick(index);
              }}
            >
              <img
                src={image}
                className="pointer-events-none h-full w-full object-cover"
              />
            </motion.button>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default ImageCarousel;
