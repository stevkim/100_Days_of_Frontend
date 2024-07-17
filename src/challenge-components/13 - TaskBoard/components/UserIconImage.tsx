import { tw } from "@/utils/twMerge";

interface UserIconImageProps {
  image: string;
  className?: string;
}

const UserIconImage = ({ image, className }: UserIconImageProps) => {
  return (
    <img
      alt={image}
      src={image}
      className={tw(
        `pointer-events-none aspect-square w-[40px] rounded-full object-cover`,
        className,
      )}
    />
  );
};

export default UserIconImage;
