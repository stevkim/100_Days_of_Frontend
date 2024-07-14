import { Calendar } from "lucide-react";

interface DateInputProps {
  name: string;
  value: Date | null;
  toggleVisible: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const DateInput = ({ name, value, toggleVisible }: DateInputProps) => {
  console.log(value);

  return (
    <div>
      <label htmlFor={name} className="text-lg font-semibold">
        {name}
      </label>
      <div className="relative flex h-[2rem] items-center">
        <input
          name={name}
          disabled
          value={value?.toDateString() || ""}
          className="w-full rounded-md bg-gray-200 px-2 py-1"
        />
        <button
          className="absolute right-2 h-full"
          type="button"
          onClick={toggleVisible}
        >
          <Calendar size={16} />
        </button>
      </div>
    </div>
  );
};

export default DateInput;
