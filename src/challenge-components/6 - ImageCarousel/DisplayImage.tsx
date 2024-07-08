import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  display: string;
  controls: {
    incrementIndex: () => void;
    decrementIndex: () => void;
  };
}

const DisplayImage = ({ display, controls }: Props) => {
  return (
    <div className="flex h-[70%] w-full">
      <button
        className="flex w-[10%] items-center justify-center text-white"
        onClick={controls.decrementIndex}
      >
        <ChevronLeft size={20} />
      </button>
      <img src={display} alt={display} className="w-[80%] object-contain" />
      <button
        className="flex w-[10%] items-center justify-center text-white"
        onClick={controls.incrementIndex}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default DisplayImage;
