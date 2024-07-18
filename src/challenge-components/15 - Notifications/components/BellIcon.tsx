import { Bell, Dot } from "lucide-react";

interface BellIconProps {
  empty: boolean;
  toggleOpen: () => void;
}

const BellIcon = ({ empty, toggleOpen }: BellIconProps) => {
  return (
    <button
      className={`relative ml-auto h-fit w-fit rounded-full bg-white p-1 ${empty ? "text-gray-400" : "text-black"}`}
      onClick={toggleOpen}
    >
      <Bell size={16} />
      {empty ? null : (
        <Dot
          size={30}
          className="absolute right-[-8px] top-[-9px] text-red-400"
        />
      )}
    </button>
  );
};

export default BellIcon;
