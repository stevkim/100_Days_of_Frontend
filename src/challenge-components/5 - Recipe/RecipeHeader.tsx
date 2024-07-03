import StarRating from "@/components/StarRating/StarRating";
import { averageRating } from "./lib/averageRating";
import { RecipeReviewData } from "./recipeData";

interface Props {
  recipeName: string;
}

const RecipeHeader = ({ recipeName }: Props) => {
  return (
    <div className="absolute z-[1] flex h-[25vh] w-full items-end justify-center">
      <div className="h-fit w-full bg-white p-8 md:w-[40%]">
        <div className="flex items-center">
          <StarRating rating={averageRating(RecipeReviewData.ratings)} />
          <span className="ml-2 text-xs">
            ({RecipeReviewData.totalReviews})
          </span>
        </div>
        <h1 className="text-3xl font-extrabold">{recipeName}</h1>
      </div>
    </div>
  );
};

export default RecipeHeader;
