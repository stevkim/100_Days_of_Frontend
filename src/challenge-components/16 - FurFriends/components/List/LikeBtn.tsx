import { Heart } from "lucide-react";

interface LikeBtnProps {
  like: boolean;
  toggleLike: () => void;
}

const LikeBtn = ({ like, toggleLike }: LikeBtnProps) => {
  return (
    <button className="ml-auto" onClick={toggleLike}>
      {like ? (
        <Heart size={16} fill="red" color="red" />
      ) : (
        <Heart size={16} color="black" />
      )}
    </button>
  );
};

export default LikeBtn;
