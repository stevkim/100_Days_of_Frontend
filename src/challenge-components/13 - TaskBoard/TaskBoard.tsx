import { useState, createContext } from "react";
import SubBoard from "./components/SubBoard";
import Modal from "@/components/Modal/Modal";
import useDrag from "./hooks/useDrag";
import TaskForm from "./components/TaskForm/TaskForm";
import type { TTask } from "./types/taskType";
import { userData } from "./userData";
import TaskCard from "./components/TaskCard";

const MockTask: TTask = {
  id: "1231242",
  board: "todo",
  taskTitle: "Test task",
  taskContent: "This is an example task",
  severity: "low",
  date: 1721173310219,
  users: userData,
};

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
  const [tasks, setTasks] = useState<TTask[]>([MockTask]);
  const [currentBoard, setCurrentBoard] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const { draggedRef, handleDragEnd, handleDragStart, handleDragOver } =
    useDrag();

  const boards = {
    todo: tasks.filter((task) => task.board === "todo"),
    inprogress: tasks.filter((task) => task.board === "inprogress"),
    underreview: tasks.filter((task) => task.board === "underreview"),
    done: tasks.filter((task) => task.board === "done"),
  };

  const openModal = (type: string) => {
    setCurrentBoard(type);
    setOpen(true);
  };

  const closeModal = () => {
    setCurrentBoard(null);
    setOpen(false);
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
        <TaskForm type={currentBoard} closeModal={closeModal} />
      </Modal>
      <DragEventContext.Provider
        value={{ handleDragStart, handleDragEnd, handleDragOver, handleDrop }}
      >
        <div className="flex flex-row items-center justify-center gap-4">
          <SubBoard id={"todo"} name={"To do"} openModal={openModal}>
            {boards.todo.map((task) => {
              return <TaskCard task={task} />;
            })}
          </SubBoard>
          <SubBoard
            id={"inprogress"}
            name={"In progress"}
            openModal={openModal}
          >
            {boards.inprogress.map((task) => {
              return <TaskCard task={task} />;
            })}
          </SubBoard>
          <SubBoard
            id={"underreview"}
            name={"Under review"}
            openModal={openModal}
          >
            {boards.underreview.map((task) => {
              return <TaskCard task={task} />;
            })}
          </SubBoard>
          <SubBoard id={"done"} name={"Done"} openModal={openModal}>
            {boards.done.map((task) => {
              return <TaskCard task={task} />;
            })}
          </SubBoard>
        </div>
      </DragEventContext.Provider>
    </section>
  );
};

export default TaskBoard;
