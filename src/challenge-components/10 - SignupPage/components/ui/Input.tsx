import { useState, useRef, InputHTMLAttributes } from "react";
import { Eye, EyeOff } from "lucide-react";
import { tw } from "@/utils/twMerge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input = ({ name, type = "text", className, ...props }: InputProps) => {
  const [active, setActive] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFocus = () => {
    setActive(true);
  };

  const handleBlur = () => {
    if (inputRef.current && inputRef.current.value === "") {
      setActive(false);
    }
  };

  const togglePasswordVisibility = () => {
    setVisiblePassword(!visiblePassword);
  };

  const inputType = () => {
    if (type !== "password") {
      return type;
    }

    return visiblePassword ? "text" : "password";
  };

  return (
    <div className="relative w-full">
      <label
        htmlFor={name}
        className={`absolute transition-all ${active ? "left-2 top-[-.5rem] bg-white px-[2px] text-[.6rem] text-blue-600" : "left-3 top-2 text-sm text-muted"}`}
      >
        {name}
      </label>
      <input
        name={name}
        ref={inputRef}
        type={inputType()}
        className={tw("w-full rounded-md border-2 p-1", className)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      {type === "password" ? (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-2 h-full text-muted"
        >
          {visiblePassword ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      ) : null}
    </div>
  );
};

export default Input;
