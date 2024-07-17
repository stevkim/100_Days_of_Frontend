import { X } from "lucide-react";
import type { TTask, TUser } from "../../types/taskType";
import { useState } from "react";
import AssignUsers from "./AssignUsers";
import { userData } from "../../data";
import { getRandomId, boardTypes, validateForm } from "../../lib";
import TaskInput from "./TaskInput";
import SelectSeverity from "./SelectSeverity";

const baseUsers = userData.map((user) => {
  return { ...user, selected: false };
});

interface TaskFormProps {
  type: string | null;
  closeModal: () => void;
  addTask: (task: TTask) => void;
}

const TaskForm = ({ type, closeModal, addTask }: TaskFormProps) => {
  const [users, setUsers] = useState<TUser[]>(baseUsers);
  const [formInput, setFormInput] = useState<TTask>({
    id: getRandomId(),
    board: type || "todo",
    taskTitle: "",
    taskContent: "",
    severity: "low",
    image: "",
    date: 0,
    users: [],
  });

  const handleUserList = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number,
  ) => {
    e.preventDefault();

    setUsers(
      users.map((user) => {
        if (user.id === id) {
          user.selected = !user.selected;
        }
        return user;
      }),
    );
  };

  const handleFormChange = async (prop: string, value: string | TUser[]) => {
    setFormInput({ ...formInput, [prop]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data = formInput;
    data.users = users.filter((user) => user.selected === true);
    data.date = Date.now();

    const validated = validateForm(data);

    if (validated.success) {
      addTask(data);
      closeModal();
    } else {
      alert(validated.errors);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-4 rounded-lg bg-white p-4 shadow-lg md:w-[30rem]"
    >
      <h3 className="flex items-center text-xl font-bold">
        Add a Task to{" "}
        <span className="ml-1 text-blue-300">{boardTypes[type || "todo"]}</span>
        <button
          role="button"
          className="ml-auto hover:scale-110"
          onClick={closeModal}
        >
          <X size={16} />
        </button>
      </h3>
      <TaskInput
        name="Task:"
        type="taskTitle"
        handleFormChange={handleFormChange}
      />
      <TaskInput
        name="Description:"
        type="taskContent"
        handleFormChange={handleFormChange}
      />
      <SelectSeverity
        value={formInput.severity}
        handleFormChange={handleFormChange}
      />
      <TaskInput
        name="Cover Photo:"
        type="image"
        handleFormChange={handleFormChange}
      />
      <AssignUsers list={users} handleUserList={handleUserList} />

      <button
        type="submit"
        className="w-full rounded-lg bg-secondary-blue py-2 text-white hover:bg-primary-blue"
      >
        Create Task
      </button>
    </form>
  );
};

export default TaskForm;
