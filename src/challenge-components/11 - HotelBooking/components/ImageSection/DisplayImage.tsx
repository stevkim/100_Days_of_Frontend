import { MapPin } from "lucide-react";
interface DisplayImageProps {
  image: string;
  location: { name: string; address: string };
}

const DisplayImage = ({ image, location }: DisplayImageProps) => {
  return (
    <div className="relative h-[70%] w-full">
      <img
        src={image}
        alt={image}
        className="pointer-events-none h-full w-full rounded-sm object-cover shadow-sm"
      />
      <div className="absolute bottom-3 left-3 flex flex-col font-bold text-white">
        <span className="text-xl">{location.name}</span>
        <span className="flex items-center text-xs">
          <MapPin size={16} className="mr-1" />
          {location.address}
        </span>
      </div>
    </div>
  );
};

export default DisplayImage;
