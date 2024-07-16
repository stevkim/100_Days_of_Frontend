import { Plus } from "lucide-react";
import { useContext } from "react";
import { DragEventContext } from "../TaskBoard";

interface SubBoardProps {
  id: string;
  name: string;
  children?: React.ReactNode;
}

const SubBoard = ({ id, name, children }: SubBoardProps) => {
  const { handleDragOver, handleDrop } = useContext(DragEventContext);

  return (
    <div
      id={id}
      className="h-full w-[25%] max-w-[400px] border p-4"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="flex items-center">
        <span className="text-lg font-semibold">{name}</span>
        <button role="button" className="ml-2">
          <Plus size={16} />
        </button>
      </div>
      {children}
    </div>
  );
};

export default SubBoard;
