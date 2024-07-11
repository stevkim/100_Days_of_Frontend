import { Copy, Check, RotateCcw } from "lucide-react";
import { useRef, useState, useEffect } from "react";

interface PasswordDisplayProps {
  value: string;
  resetDisplay: () => void;
}

const PasswordDisplay = ({ value, resetDisplay }: PasswordDisplayProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    if (navigator.clipboard && inputRef.current) {
      if (inputRef.current.value === "Create a password") {
        return alert("Generate a secure password first");
      }
      if (inputRef.current.value.replace(/0/g, "") === "") {
        return alert("Thats not a secure password!");
      }
      navigator.clipboard.writeText(inputRef.current.value);
      setCopied(true);
    }
  };

  useEffect(() => {
    setCopied(false);
  }, [value, setCopied]);

  return (
    <>
      <h1 className="text-xl font-bold">Password Generator</h1>
      <label className="relative text-xs">
        GENERATED PASSWORD
        <input
          name="displayPassword"
          ref={inputRef}
          type="text"
          value={value}
          readOnly
          className="mt-2 h-[2rem] w-full overflow-x-auto rounded-lg bg-blue-500 p-2 text-lg"
        />
        <button
          type="button"
          className="absolute right-7 top-7 bg-blue-500 p-1 text-black"
          onClick={handleClick}
        >
          {copied ? (
            <Check size={16} color="rgb(143, 206, 255)" />
          ) : (
            <Copy size={16} color="rgb(143, 206, 255)" />
          )}
        </button>
        <button
          type="button"
          className="absolute right-1 top-7 bg-blue-500 p-1 text-black"
          onClick={resetDisplay}
        >
          <RotateCcw size={16} color="rgb(143, 206, 255)" />
        </button>
      </label>
    </>
  );
};

export default PasswordDisplay;
