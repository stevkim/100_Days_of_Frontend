import RecipeHeader from "./RecipeHeader";
import RecipeImageDisplay from "./RecipeImageDisplay";
import RecipeContent from "./RecipeContent";
import { RecipeData } from "./recipeData";
import "./recipe.css";

const Recipe = () => {
  const { image, name } = RecipeData;

  return (
    <section className="recipe-page relative flex w-full flex-col md:flex-row">
      <RecipeHeader recipeName={name} />
      <RecipeImageDisplay image={image} name={name} />
      <RecipeContent recipe={RecipeData} />
    </section>
  );
};

export default Recipe;
