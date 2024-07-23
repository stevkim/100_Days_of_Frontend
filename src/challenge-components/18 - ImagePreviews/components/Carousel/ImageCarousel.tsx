import { motion } from "framer-motion";
import type { TImage } from "../../types/imageType";
import { useState, useRef, useEffect } from "react";
import CarouselItem from "./CarouselItem";

interface ImageCarouselProps {
  list: TImage[];
}

const ImageCarousel = ({ list }: ImageCarouselProps) => {
  const [carouselWidth, setCarouselWidth] = useState(0);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wrapperRef.current) {
      setCarouselWidth(
        wrapperRef.current?.scrollWidth -
          wrapperRef.current?.offsetWidth +
          list.length,
      );
    }
  }, [wrapperRef, list]);

  return (
    <motion.div className="h-[10%] w-full overflow-hidden" ref={wrapperRef}>
      <motion.div
        className="flex h-full flex-row gap-4"
        drag="x"
        dragConstraints={{ left: -carouselWidth, right: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        {list.map((image, index) => {
          return <CarouselItem image={image} index={index} key={image.id} />;
        })}
      </motion.div>
    </motion.div>
  );
};

export default ImageCarousel;
