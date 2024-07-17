import { useState, createContext } from "react";
import SubBoard from "./components/SubBoard";
import Modal from "@/components/Modal/Modal";
import TaskForm from "./components/TaskForm/TaskForm";
import type { TTask } from "./types/taskType";
import { MockTaskData } from "./data";
import TaskCard from "./components/TaskCard";
import useBoardModal from "./hooks/useBoardModal";
import useDrag from "./hooks/useDrag";

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
  const [tasks, setTasks] = useState<TTask[]>(MockTaskData);
  const { draggedRef, handleDragEnd, handleDragStart, handleDragOver } =
    useDrag();
  const { openModal, closeModal, currentBoard, open } = useBoardModal();

  const boards = {
    todo: tasks.filter((task) => task.board === "todo"),
    inprogress: tasks.filter((task) => task.board === "inprogress"),
    underreview: tasks.filter((task) => task.board === "underreview"),
    done: tasks.filter((task) => task.board === "done"),
  };

  const handleAdd = (task: TTask) => {
    setTasks([...tasks, task]);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const newList = tasks.map((task) => {
      if (task.id === draggedRef.current?.id) {
        task.board = e.currentTarget.id;
      }
      return task;
    });

    setTasks(newList);
  };

  return (
    <section className="relative flex h-page w-full flex-col bg-gray-200 p-10">
      <h1 className="text-2xl font-bold">Task Board</h1>
      <Modal open={open}>
        <TaskForm
          type={currentBoard}
          closeModal={closeModal}
          addTask={handleAdd}
        />
      </Modal>
      <DragEventContext.Provider
        value={{ handleDragStart, handleDragEnd, handleDragOver, handleDrop }}
      >
        <div className="flex h-full flex-row items-center justify-center gap-4">
          <SubBoard id={"todo"} name={"To do"} openModal={openModal}>
            {boards.todo.map((task) => {
              return <TaskCard key={task.id} task={task} />;
            })}
          </SubBoard>
          <SubBoard
            id={"inprogress"}
            name={"In progress"}
            openModal={openModal}
          >
            {boards.inprogress.map((task) => {
              return <TaskCard key={task.id} task={task} />;
            })}
          </SubBoard>
          <SubBoard
            id={"underreview"}
            name={"Under review"}
            openModal={openModal}
          >
            {boards.underreview.map((task) => {
              return <TaskCard key={task.id} task={task} />;
            })}
          </SubBoard>
          <SubBoard id={"done"} name={"Done"} openModal={openModal}>
            {boards.done.map((task) => {
              return <TaskCard key={task.id} task={task} />;
            })}
          </SubBoard>
        </div>
      </DragEventContext.Provider>
    </section>
  );
};

export default TaskBoard;
