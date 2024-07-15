import StarRating from "@/components/StarRating/StarRating";
import { getAverageRating } from "../lib/getAverageRating";
import { Heart } from "lucide-react";
import { useState } from "react";

interface CardHeaderProps {
  data: {
    name: string;
    description: string;
    address: string;
    reviews: { name: string; review: string; rating: number }[];
  };
}

const CardHeader = ({ data }: CardHeaderProps) => {
  const [like, setLike] = useState(false);
  const { name, address, reviews } = data;

  const averageRating = getAverageRating(reviews);

  const toggleLike = () => {
    setLike(!like);
  };

  return (
    <div className="relative mb-3 flex w-full flex-col">
      <span className="text-lg font-semibold">{name}</span>
      <span className="w-[50%] text-wrap text-[.6rem]">{address}</span>
      <div className="flex items-center text-[.7rem]">
        <StarRating rating={averageRating} />
        <span className="ml-1 text-[.6rem]">({reviews.length} reviews)</span>
      </div>
      <button
        role="button"
        className="absolute right-4 top-4"
        onClick={toggleLike}
      >
        <Heart
          size={20}
          fill={like ? "red" : "none"}
          stroke={like ? "red" : "black"}
        />
      </button>
    </div>
  );
};

export default CardHeader;
