import { ReactNode } from "react";
import DropdownList from "./DropdownList";
import { ChevronDown } from "lucide-react";
import { useContext } from "react";
import { NavContext } from "./Navbar";

interface Props {
  children: ReactNode;
}

const NavDropdown = ({ children }: Props) => {
  const { open, setOpen } = useContext(NavContext);

  const handleToggle = () => {
    if (open === "components") {
      setOpen(null);
    } else {
      setOpen("components");
    }
  };

  return (
    <>
      <div className="">
        <button
          onClick={handleToggle}
          className="flex flex-row items-center rounded-md px-2 py-1 hover:bg-gray-400"
        >
          {children}{" "}
          <ChevronDown
            size={12}
            className={`ml-1 transition-all ${open === "components" ? "rotate-180" : ""}`}
          />
        </button>
        {open === "components" ? (
          <DropdownList handleToggle={handleToggle} />
        ) : null}
      </div>
    </>
  );
};

export default NavDropdown;