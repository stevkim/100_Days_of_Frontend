import { useState } from "react";

const TaskBoard = () => {
  const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.id);
  };

  return (
    <section className="relative flex h-page w-full flex-row items-center justify-center gap-10">
      <div
        id="board-1"
        className="h-[300px] w-[200px] border border-blue-200"
        onDragOver={dragOver}
        onDrop={handleDrop}
      >
        <h4>Board 1</h4>
        <div className="absolute" draggable="true">
          task
        </div>
      </div>
      <div
        id="board-2"
        className="h-[300px] w-[200px] border border-blue-200"
        onDragOver={dragOver}
        onDrop={handleDrop}
      >
        <h4>Board 2</h4>
      </div>
      <div
        id="board-3"
        className="h-[300px] w-[200px] border border-blue-200"
        onDragOver={dragOver}
        onDrop={handleDrop}
      >
        <h4>Board 3</h4>
      </div>
    </section>
  );
};

export default TaskBoard;
