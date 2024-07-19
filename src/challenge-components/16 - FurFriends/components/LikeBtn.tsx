import { Heart } from "lucide-react";
import { tw } from "@/utils/twMerge";

interface LikeBtnProps {
  like: boolean;
  toggleLike: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const LikeBtn = ({ like, toggleLike, className }: LikeBtnProps) => {
  return (
    <button className={tw("", className)} onClick={(e) => toggleLike(e)}>
      {like ? (
        <Heart size={16} fill="red" color="red" />
      ) : (
        <Heart size={16} color="black" />
      )}
    </button>
  );
};

export default LikeBtn;
