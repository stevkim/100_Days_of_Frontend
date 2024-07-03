import { Link } from "@tanstack/react-router";
import NavDropdown from "./NavDropdown";
import { createContext, useState, useEffect } from "react";

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

  useEffect(() => {
    window.addEventListener("click", () => {
      setOpen(null);
    });
  }, []);

  return (
    <nav className="bg-white fixed top-0 z-10 flex h-[50px] w-[100vw] flex-row items-center px-[10%] shadow-lg">
      <NavContext.Provider value={{ open, setOpen }}>
        <Link
          to="/"
          className="hover:bg-gray-400 mr-auto rounded-sm px-2 py-1 text-lg"
        >
          100 Days of Frontend
        </Link>
        <NavDropdown>Components</NavDropdown>
      </NavContext.Provider>
    </nav>
  );
};

export default Navbar;
