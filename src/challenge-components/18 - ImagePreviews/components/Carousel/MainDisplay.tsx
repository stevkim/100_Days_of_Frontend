import type { TImage } from "../../types/imageType";

interface MainDisplayProps {
  image: TImage;
}

const MainDisplay = ({ image }: MainDisplayProps) => {
  return (
    <img
      src={image.image}
      alt={image.title}
      className="pointer-events-none h-[90%] w-full rounded-lg object-cover pb-4"
    />
  );
};

export default MainDisplay;
