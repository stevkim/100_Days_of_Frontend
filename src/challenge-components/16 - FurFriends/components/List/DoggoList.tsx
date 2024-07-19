import { TDOGGO } from "../../types/dogType";
import ListItem from "./ListItem";

interface DoggoListProps {
  list: TDOGGO[];
}

const DoggoList = ({ list }: DoggoListProps) => {
  if (list.length === 0) {
    return (
      <p className="w-full py-4 text-center text-muted">
        Whoops! No fur friend here!
      </p>
    );
  }

  return (
    <div className="no-scrollbar flex h-[95%] flex-col gap-4 overflow-y-auto">
      {list.map((doggo) => {
        return <ListItem key={doggo.id} doggo={doggo} />;
      })}
    </div>
  );
};

export default DoggoList;
