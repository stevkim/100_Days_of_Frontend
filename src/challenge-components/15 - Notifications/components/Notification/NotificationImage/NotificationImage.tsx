import ImageIcon from "./ImageIcon";

interface NotificationImageProps {
  image: string;
  type: string;
}

const NotificationImage = ({ image, type }: NotificationImageProps) => {
  return (
    <div className="relative aspect-square h-[40px]">
      <img
        src={image}
        alt={"User image"}
        className="h-full w-full rounded-full object-cover"
      />
      <ImageIcon type={type} />
    </div>
  );
};

export default NotificationImage;
