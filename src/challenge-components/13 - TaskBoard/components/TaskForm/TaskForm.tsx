import { X } from "lucide-react";
import type { TTask, TUser } from "../../types/taskType";
import { useState } from "react";
import { getRandomId } from "../../lib/getRandomId";
import AssignUsers from "./AssignUsers";
import { userData } from "../../userData";

const baseUsers = userData.map((user) => {
  return { ...user, selected: false };
});

interface TaskFormProps {
  type: string | null;
  closeModal: () => void;
}

const TaskForm = ({ type, closeModal }: TaskFormProps) => {
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

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const data = formInput;
    data.users = users.filter((user) => user.selected === true);
    data.date = Date.now();

    console.log(data);
  };

  return (
    <form className="flex w-full flex-col gap-4 rounded-lg bg-white p-4 shadow-lg md:w-[30rem]">
      <h3 className="flex items-center text-xl font-bold">
        Add a Task{" "}
        <button
          role="button"
          className="ml-auto hover:scale-110"
          onClick={closeModal}
        >
          <X size={16} />
        </button>
      </h3>
      <label className="flex flex-col">
        Task:
        <input
          type="text"
          className="bg-gray-200"
          onChange={(e) => handleFormChange("taskTitle", e.target.value)}
        />
      </label>

      <label className="flex flex-col">
        Description:
        <textarea
          className="bg-gray-200"
          onChange={(e) => handleFormChange("taskContent", e.target.value)}
        />
      </label>

      <label>
        Severity:
        <select
          className="ml-2"
          value={formInput.severity}
          onChange={(e) => handleFormChange("severity", e.target.value)}
        >
          <option value={"low"}>Low</option>
          <option value={"medium"}>Medium</option>
          <option value={"high"}>High</option>
        </select>
      </label>

      <label className="flex flex-col">
        Cover Photo:
        <input type="text" className="bg-gray-200" />
      </label>
      <AssignUsers list={users} handleUserList={handleUserList} />

      <button
        onClick={handleSubmit}
        className="w-full rounded-lg bg-secondary-blue py-2 text-white hover:bg-primary-blue"
      >
        Create Task
      </button>
    </form>
  );
};

export default TaskForm;
