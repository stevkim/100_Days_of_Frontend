import { TImage } from "../../types/imageType";

interface ListItemProps {
  index: number;
  image: TImage;
}

const ListItem = ({ index, image }: ListItemProps) => {
  return (
    <li
      className={`mb-4 flex h-[20%] items-center px-8 py-2 ${index % 2 === 0 ? "bg-black" : "bg-gray-700"}`}
    >
      <img
        src={image.image}
        alt={image.title}
        className="pointer-events-none aspect-video h-full rounded-lg object-cover"
      />
      <p className="ml-8 text-2xl text-white">{image.title}</p>
    </li>
  );
};

export default ListItem;
