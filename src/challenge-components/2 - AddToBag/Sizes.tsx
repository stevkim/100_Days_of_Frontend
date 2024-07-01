import type { TSizes } from "./data";

interface Props {
  sizes: TSizes;
  handleClick: (size: string) => void;
  activeSize: string | null;
}

const SIZES = ["S", "M", "L", "XL", "XXL"];

const Sizes = ({ sizes, activeSize, handleClick }: Props) => {
  return (
    <div className="mt-2 flex flex-row gap-2">
      {SIZES.map((size) => {
        return (
          <button
            key={size}
            onClick={() => handleClick(size)}
            disabled={sizes[size] <= 0}
            className={`aspect-square w-[2.5rem] rounded-sm disabled:opacity-25 ${size === activeSize ? "bg-black text-white" : ""}`}
          >
            {size}
          </button>
        );
      })}
    </div>
  );
};

export default Sizes;
