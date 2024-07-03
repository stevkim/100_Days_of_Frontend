interface Props {
  instructions: string[];
}

const RecipeInstructions = ({ instructions }: Props) => {
  return (
    <div className="mt-2 flex flex-col">
      <h4 className="mb-2 font-extrabold">INSTRUCTIONS</h4>
      <ol className="list-inside list-decimal">
        {instructions.map((step) => {
          return (
            <li key={step} className="my-2">
              {step}
            </li>
          );
        })}
      </ol>
    </div>
  );
};
export default RecipeInstructions;
