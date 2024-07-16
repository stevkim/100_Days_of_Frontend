import { useState, useRef } from "react";

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

  const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.id);

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
    <section className="relative flex h-page w-full flex-row items-center justify-center gap-10">
      <div
        id="board-1"
        className="h-[300px] w-[200px] border border-blue-200"
        onDragOver={dragOver}
        onDrop={handleDrop}
      >
        <div className="flex justify-evenly">
          <h4>Board 1</h4>
          <button onClick={() => handleAdd("1", `testing ${Math.random()}`)}>
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
        onDragOver={dragOver}
        onDrop={handleDrop}
      >
        <div className="flex justify-evenly">
          <h4>Board 2</h4>
          <button onClick={() => handleAdd("2", `testing ${Math.random()}`)}>
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
        onDragOver={dragOver}
        onDrop={handleDrop}
      >
        <div className="flex justify-evenly">
          <h4>Board 3</h4>
          <button onClick={() => handleAdd("3", `testing ${Math.random()}`)}>
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
    </section>
  );
};

export default TaskBoard;
