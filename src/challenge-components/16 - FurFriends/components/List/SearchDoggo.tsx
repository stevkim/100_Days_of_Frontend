import { Search } from "lucide-react";

interface SearchDoggoProps {
  handleChange: (value: string) => void;
}

const SearchDoggo = ({ handleChange }: SearchDoggoProps) => {
  return (
    <label className="relative w-full">
      <span className="absolute left-2 flex h-full items-center text-gray-400">
        <Search size={12} strokeWidth={"3px"} />
      </span>
      <input
        type="text"
        className="w-full rounded-md bg-gray-100 p-1 indent-[22px]"
        placeholder="Search for a friend"
        onChange={(e) => handleChange(e.target.value)}
      />
    </label>
  );
};

export default SearchDoggo;
