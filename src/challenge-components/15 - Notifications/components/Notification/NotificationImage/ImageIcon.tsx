import {
  Users,
  User,
  MessageSquareText,
  MessageSquarePlus,
} from "lucide-react";
import { useMemo } from "react";
import { tw } from "@/utils/twMerge";

interface ImageIconProps {
  type: string;
}

const ImageIcon = ({ type }: ImageIconProps) => {
  const icon = useMemo(() => {
    if (type === "join-group") {
      return {
        icon: <Users size={12} />,
        color: "bg-blue-300",
      };
    }
    if (type === "mention") {
      return {
        icon: <MessageSquareText size={12} />,
        color: "bg-orange-300",
      };
    }
    if (type === "friend-request") {
      return {
        icon: <User size={12} />,
        color: "bg-violet-400",
      };
    }
    if (type === "post") {
      return {
        icon: <MessageSquarePlus size={12} />,
        color: "bg-green-300",
      };
    }
  }, [type]);

  return (
    <div
      className={tw(
        icon?.color,
        "absolute right-[-2px] top-0 rounded-full p-[2px] text-white",
      )}
    >
      {icon?.icon}
    </div>
  );
};

export default ImageIcon;
