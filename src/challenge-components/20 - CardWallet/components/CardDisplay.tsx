import CardList from "./CardList";
import CardIndicator from "./CardIndicator";
import { Plus } from "lucide-react";
import { Link } from "@tanstack/react-router";

const CardDisplay = () => {
  return (
    <div className="relative mb-[3rem] h-[42%] w-full rounded-2xl bg-black px-4 py-8 text-white md:h-[50%]">
      <h3 className="text-4xl">
        <span className="block text-xs">Welcome</span>
        My Cards
      </h3>
      <CardList />
      <CardIndicator />
      <div className="absolute bottom-[-3rem] left-0 flex w-full justify-center">
        <div className="h-0 w-0 border-l-[4rem] border-r-[4rem] border-t-[3rem] border-black border-l-transparent border-r-transparent"></div>
      </div>
      <div className="absolute bottom-[-2rem] left-0 flex w-full justify-center">
        <Link className="h-fit w-fit rounded-full bg-blue-300" to={"add-card"}>
          <Plus size={32} color="white" />
        </Link>
      </div>
    </div>
  );
};

export default CardDisplay;
