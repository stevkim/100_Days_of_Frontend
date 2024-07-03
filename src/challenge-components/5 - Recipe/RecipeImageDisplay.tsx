interface Props {
  image: string;
  name: string;
}

const RecipeImageDisplay = ({ image, name }: Props) => {
  return (
    <div className="relative h-[40%] w-full md:h-full md:w-[45%]">
      <img src={image} className="h-full w-full object-cover" />
      <span className="invisible absolute bottom-10 z-10 w-[250px] bg-black p-3 text-sm font-semibold text-white md:visible">
        {name.toUpperCase()}
      </span>
    </div>
  );
};

export default RecipeImageDisplay;
