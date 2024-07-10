import { Star } from "lucide-react";
import { convertRating } from "./convertRating";

interface Props {
  rating: number;
}

const StarRating = ({ rating }: Props) => {
  const totalStars = Array(5).fill(0);

  return (
    <div className="relative block h-[1em] w-[5em]">
      <div
        className={`absolute flex flex-row overflow-hidden`}
        style={{ width: `${convertRating(rating)}%` }}
      >
        {totalStars.map(() => {
          return (
            <div>
              <Star size={16} fill="#e0d900" color="#e0d900" />
            </div>
          );
        })}
      </div>
      <div className="flex flex-row">
        {totalStars.map(() => {
          return <Star size={16} color="#e3e3e3" fill="#e3e3e3" />;
        })}
      </div>
    </div>
  );
};

export default StarRating;