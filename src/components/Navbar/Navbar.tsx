import { Link } from "@tanstack/react-router";
import NavDropdown from "./NavDropdown";
import { createContext, useState } from "react";

const initNavContext: {
  open: string | null;
  setOpen: (value: string | null) => void;
} = {
  open: null,
  setOpen: () => {},
};

export const NavContext = createContext(initNavContext);

const Navbar = () => {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 z-10 flex h-[50px] w-[100vw] flex-row items-center border-2 px-[10%] shadow-lg">
      <NavContext.Provider value={{ open, setOpen }}>
        <Link
          to="/"
          className="mr-auto rounded-sm px-4 py-2 text-lg hover:bg-gray-400"
          onClick={() => setOpen(null)}
        >
          100 Days of Frontend
        </Link>
        <NavDropdown>Components</NavDropdown>
      </NavContext.Provider>
    </nav>
  );
};

export default Navbar;
