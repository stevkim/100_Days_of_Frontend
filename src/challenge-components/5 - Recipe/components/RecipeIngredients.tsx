interface Props {
  ingredients: string[];
}

const RecipeIngredients = ({ ingredients }: Props) => {
  return (
    <div className="mt-2 flex flex-col">
      <h4 className="mb-2 font-extrabold">INGREDIENTS</h4>
      <div className="flex flex-col gap-1">
        {ingredients.map((ingredient) => {
          return (
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 h-[1em] w-[1em] accent-yellow-600"
              />
              {ingredient}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default RecipeIngredients;
