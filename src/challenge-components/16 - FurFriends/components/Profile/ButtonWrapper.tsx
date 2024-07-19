import { CircleDollarSign, PawPrint } from "lucide-react";

const ButtonWrapper = () => {
  return (
    <div className="flex justify-center gap-4">
      <button className="flex w-[30%] items-center justify-center rounded-md bg-gray-400 px-4 py-2 hover:bg-gray-400/75">
        Donate <CircleDollarSign className="ml-2" size={"1rem"} />
      </button>
      <button className="flex w-[50%] items-center justify-center rounded-md bg-red-400 py-2 text-white hover:bg-red-400/75">
        Adopt <PawPrint className="ml-2" size={"1rem"} />
      </button>
    </div>
  );
};

export default ButtonWrapper;
