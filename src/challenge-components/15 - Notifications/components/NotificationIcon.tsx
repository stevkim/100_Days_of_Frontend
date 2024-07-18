import { Bell, Dot } from "lucide-react";

interface NotificationIconProps {
  empty: boolean;
  toggleOpen: () => void;
}

const NotificationIcon = ({ empty, toggleOpen }: NotificationIconProps) => {
  return (
    <button
      className={`relative h-fit w-fit rounded-full bg-white p-1 ${empty ? "text-gray-400" : "text-black"}`}
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

export default NotificationIcon;
