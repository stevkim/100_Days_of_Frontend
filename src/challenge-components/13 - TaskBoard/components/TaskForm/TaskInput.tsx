interface TaskInputProps {
  name: string;
  handleFormChange: (type: string, value: string) => void;
  type: string;
}

const TaskInput = ({ name, type, handleFormChange }: TaskInputProps) => {
  return (
    <label className="flex flex-col">
      {name}
      {type === "taskContent" ? (
        <textarea
          className="bg-gray-200"
          onChange={(e) => handleFormChange("taskContent", e.target.value)}
        />
      ) : (
        <input
          type="text"
          className="bg-gray-200"
          onChange={(e) => handleFormChange(type, e.target.value)}
        />
      )}
    </label>
  );
};

export default TaskInput;
