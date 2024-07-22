import type { TAUTHOR } from "../../types/dataTypes";
import { Forward } from "lucide-react";
import { useState } from "react";
import ShareBtns from "./ShareBtns";

interface CardFooterProps {
  author: TAUTHOR;
  date: number;
}

const CardFooter = ({ author, date }: CardFooterProps) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="mt-auto flex h-[12%] items-center gap-2">
      <img
        src={author.image}
        className="aspect-square h-full max-h-[50px] rounded-full object-cover"
      />
      <div className="flex flex-col text-xs">
        <span className="font-semibold">{author.name}</span>
        {new Date(date).toDateString()}
      </div>
      <div className="relative ml-auto">
        <button
          className="flex items-center justify-center rounded-md bg-gray-200 p-1 hover:bg-gray-200/75"
          onClick={toggleVisibility}
        >
          <Forward size={16} />
        </button>
        {visible ? <ShareBtns /> : null}
      </div>
    </div>
  );
};

export default CardFooter;
