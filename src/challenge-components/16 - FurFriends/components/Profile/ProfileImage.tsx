import LikeBtn from "../LikeBtn";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

interface ProfileImageProps {
  image: string;
  alt: string;
}

const ProfileImage = ({ image, alt }: ProfileImageProps) => {
  return (
    <div className="relative aspect-square w-full">
      <img
        src={image}
        alt={alt}
        className="aspect-square w-full rounded-lg object-cover"
      />
      <Link to="/fur-friends" className="absolute left-3 top-3">
        <ArrowLeft size={16} />
      </Link>
      <LikeBtn
        className={"absolute right-3 top-3"}
        like={true}
        toggleLike={() => {}}
      />
    </div>
  );
};

export default ProfileImage;
