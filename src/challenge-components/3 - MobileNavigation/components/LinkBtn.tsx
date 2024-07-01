import { TNavLink } from "../data";
import { ChevronRight } from "lucide-react";

interface Props {
  nav: TNavLink;
}

const LinkBtn = ({ nav }: Props) => {
  const { name, Icon } = nav;

  return (
    <button className="hover:text-blue-300 flex flex-row items-center gap-2 text-xs font-semibold">
      <span className="bg-gray-100 flex aspect-square w-7 items-center justify-center rounded-md">
        <Icon size={14} />
      </span>
      {name}
      <ChevronRight className="ml-auto" color="gray" size={14} />
    </button>
  );
};

export default LinkBtn;
