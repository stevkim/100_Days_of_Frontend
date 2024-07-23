import { TImage } from "../../types/imageType";

interface GridItemProps {
  image: TImage;
}

const GridItem = ({ image }: GridItemProps) => {
  return (
    <img
      src={image.image}
      alt={image.title}
      className="aspect-video w-full rounded-lg object-cover"
    />
  );
};

export default GridItem;
