import { useState, useRef, createContext } from "react";
import SubBoard from "./components/SubBoard";

interface CustomDragEvents {
  handleDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDragEnd: () => void;
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
}

export const DragEventContext = createContext<CustomDragEvents>({
  handleDragStart: () => {},
  handleDragEnd: () => {},
  handleDragOver: () => {},
  handleDrop: () => {},
});

const TaskBoard = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const draggedRef = useRef<HTMLDivElement | null>(null);

  const one = tasks.filter((task) => task[0] === "1");
  const two = tasks.filter((task) => task[0] === "2");
  const three = tasks.filter((task) => task[0] === "3");

  const handleAdd = (board: string, value: string = "test") => {
    setTasks([...tasks, `${board}. ${value}`]);
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    draggedRef.current = e.currentTarget;
  };

  const handleDragEnd = () => {
    draggedRef.current = null;
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const newList = tasks.map((task) => {
      if (task === draggedRef.current?.innerText) {
        return (
          e.currentTarget.id.substring(e.currentTarget.id.length - 1) +
          task.substring(1)
        );
      }
      return task;
    });

    setTasks(newList);
  };

  return (
    <section className="relative flex h-page w-full flex-col p-10">
      <h1 className="text-2xl font-bold">Task Board</h1>
      <DragEventContext.Provider
        value={{ handleDragStart, handleDragEnd, handleDragOver, handleDrop }}
      >
        <div className="flex flex-row items-center justify-center gap-10">
          <SubBoard id={"todo"} name={"To do"}></SubBoard>
          <div
            id="board-1"
            className="h-[300px] w-[200px] border border-blue-200"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div className="flex justify-evenly">
              <h4>Board 1</h4>
              <button
                onClick={() => handleAdd("1", `testing ${Math.random()}`)}
              >
                +
              </button>
            </div>
            {one.map((text, index) => {
              return (
                <div
                  draggable="true"
                  key={"board-one" + text + index}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                >
                  {text}
                </div>
              );
            })}
          </div>
          <div
            id="board-2"
            className="h-[300px] w-[200px] border border-blue-200"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div className="flex justify-evenly">
              <h4>Board 2</h4>
              <button
                onClick={() => handleAdd("2", `testing ${Math.random()}`)}
              >
                +
              </button>
            </div>
            {two.map((text, index) => {
              return (
                <div
                  draggable="true"
                  key={"board-two" + text + index}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                >
                  {text}
                </div>
              );
            })}
          </div>
          <div
            id="board-3"
            className="h-[300px] w-[200px] border border-blue-200"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div className="flex justify-evenly">
              <h4>Board 3</h4>
              <button
                onClick={() => handleAdd("3", `testing ${Math.random()}`)}
              >
                +
              </button>
            </div>
            {three.map((text, index) => {
              return (
                <div
                  draggable="true"
                  key={"board-three" + text + index}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                >
                  {text}
                </div>
              );
            })}
          </div>
        </div>
      </DragEventContext.Provider>
    </section>
  );
};

export default TaskBoard;
