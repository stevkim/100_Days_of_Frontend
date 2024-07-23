import { useContext } from "react";
import { ImageListContext } from "../../ImagePreview";
import ListItem from "./ListItem";

const List = () => {
  const { list } = useContext(ImageListContext);

  return (
    <ul className="h-full py-8">
      {list.map((image, index) => {
        return <ListItem index={index} image={image} />;
      })}
    </ul>
  );
};

export default List;
