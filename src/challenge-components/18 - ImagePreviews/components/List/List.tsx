import { useContext } from "react";
import { ImageListcontext } from "../../ImagePreview";
import ListItem from "./ListItem";

const List = () => {
  const { list } = useContext(ImageListcontext);

  return (
    <ul className="main-area overflow-y-auto py-8">
      {list.map((image, index) => {
        return <ListItem index={index} image={image} />;
      })}
    </ul>
  );
};

export default List;
