import type { TRecipe } from "./recipeData";
import RecipeWidget from "./components/RecipeWidget";
import RecipeIngredients from "./components/RecipeIngredients";
import RecipeInstructions from "./components/RecipeInstructions";

interface Props {
  recipe: TRecipe;
}

const RecipeContent = ({ recipe }: Props) => {
  const {
    totalTime,
    difficulty,
    cost,
    description,
    instructions,
    ingredients,
  } = recipe;

  return (
    <div className="flex w-full flex-col gap-4 px-8 py-4 md:mt-[25vh] md:w-[55%]">
      <RecipeWidget data={{ totalTime, difficulty, cost }} />
      <p className="text-sm italic">{description}</p>
      <RecipeIngredients ingredients={ingredients} />
      <RecipeInstructions instructions={instructions} />
    </div>
  );
};

export default RecipeContent;
