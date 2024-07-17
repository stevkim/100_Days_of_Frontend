import { Plus } from "lucide-react";
import { useContext } from "react";
import { DragEventContext } from "../TaskBoard";

interface SubBoardProps {
  id: string;
  name: string;
  children?: React.ReactNode;
  openModal: (type: string) => void;
}

const SubBoard = ({ id, name, children, openModal }: SubBoardProps) => {
  const { handleDragOver, handleDrop } = useContext(DragEventContext);

  return (
    <div
      id={id}
      className="flex h-full w-[25%] max-w-[400px] flex-col gap-4 p-4"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="flex items-center">
        <span className="text-xl font-semibold">{name}</span>
        <button role="button" className="ml-2" onClick={() => openModal(id)}>
          <Plus size={16} />
        </button>
      </div>
      {children}
    </div>
  );
};

export default SubBoard;
