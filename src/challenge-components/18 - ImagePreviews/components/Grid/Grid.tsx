import { useContext } from "react";
import { ImageListContext } from "../../ImagePreview";
import GridItem from "./GridItem";

const Grid = () => {
  const { list } = useContext(ImageListContext);

  return (
    <div className="grid grid-cols-3 gap-4 p-8">
      {list.map((image) => {
        return <GridItem key={image.id} image={image} />;
      })}
    </div>
  );
};

export default Grid;
