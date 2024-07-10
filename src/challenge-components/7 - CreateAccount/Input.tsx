import { SquareUser, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface InputProps {
  field: string;
  name: string;
  Icon?: React.ElementType;
  type: string;
  placeholder?: string;
  handleChange: (key: string, value: string) => void;
}

const PasswordInput: React.FC<{
  inputChange: (value: string) => void;
}> = ({ inputChange }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="relative h-[3rem] w-full">
      <label className="absolute left-2 top-1 text-[.7rem] font-semibold text-muted">
        Password
      </label>
      <input
        type={visible ? "text" : "password"}
        onChange={(e) => inputChange(e.target.value)}
        className="h-full w-full rounded-md bg-gray-100 px-2 pb-3 pt-8 font-semibold"
      />
      <div className="absolute right-0 top-0 flex h-full items-center px-2 text-gray-500">
        <button type="button" onClick={toggleVisibility}>
          {visible ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>
    </div>
  );
};

const Input: React.FC<InputProps> = ({
  name,
  type,
  Icon = SquareUser,
  handleChange,
  field,
  placeholder = "",
}) => {
  const inputChange = (value: string) => {
    handleChange(field, value);
  };

  if (type === "password") {
    return <PasswordInput inputChange={inputChange} />;
  }

  return (
    <div className="relative h-[3rem] w-full">
      <label className="absolute left-2 top-1 text-[.7rem] font-semibold text-muted">
        {name}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => inputChange(e.target.value)}
        className="h-full w-full rounded-md bg-gray-100 px-2 pb-3 pt-8 font-semibold"
      />
      <div className="absolute right-0 top-0 flex h-full items-center px-2 text-gray-500">
        <Icon size={16} />
      </div>
    </div>
  );
};

export default Input;
