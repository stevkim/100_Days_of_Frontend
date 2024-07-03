import { motion } from "framer-motion";
import { NAVS } from "./Navs";
import DropdownItem from "./DropdownItem";
import { Puzzle } from "lucide-react";

const DropdownList = () => {
  return (
    <motion.div
      className="fixed left-0 top-[50px] z-10 flex w-[100vw] flex-col rounded-md bg-gray-300 p-2 shadow-md"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
    >
      <div className="flex flex-col rounded-md border-2 p-2">
        <span className="flex items-center text-lg">
          <Puzzle size={20} className="mr-2" />
          Components
        </span>
        <span className="text-sm">
          Below are components for each day of the 100 Days of Frontend
          Challenge
        </span>
      </div>
      <div className="flex flex-row flex-wrap overflow-y-auto">
        {NAVS.map((nav) => (
          <DropdownItem key={nav.name} nav={nav} />
        ))}
      </div>
    </motion.div>
  );
};

export default DropdownList;
