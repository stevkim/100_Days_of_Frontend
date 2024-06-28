import { Link } from "@tanstack/react-router";

interface Props {
  nav: { name: string; link: string; id: number };
}

const DropdownItem = ({ nav }: Props) => {
  return (
    <Link
      to={nav.link}
      className="flex w-[180px] min-w-[10%] flex-col rounded-md px-4 py-2 hover:bg-gray-400"
    >
      <span>Day {nav.id}</span>
      <i className="text-sm">{nav.name}</i>
    </Link>
  );
};

export default DropdownItem;
