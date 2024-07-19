import ListHeader from "./List/ListHeader";
import ListItem from "./List/ListItem";
import { dogs } from "../data";
import { useState, useMemo } from "react";
import SearchDoggo from "./SearchDoggo";

const DoggoList = () => {
  const [doggos] = useState(dogs);
  const [searchValue, setSearchValue] = useState("");

  const activeDogs = useMemo(() => {
    return doggos.filter((dog) => {
      const { name, breed } = dog;

      if (
        name.toLowerCase().includes(searchValue) ||
        breed.toLowerCase().includes(searchValue)
      ) {
        return dog;
      }
    });
  }, [searchValue, doggos]);

  const handleChange = (value: string) => {
    setSearchValue(value.toLowerCase());
  };

  return (
    <div className="mt-20 flex max-h-[600px] w-full flex-col gap-4 rounded-md bg-white p-6 shadow-lg md:w-[25rem]">
      <ListHeader />
      <SearchDoggo handleChange={handleChange} />
      <div className="flex h-[95%] flex-col gap-4 overflow-y-auto">
        {activeDogs.map((doggo) => {
          return <ListItem key={doggo.id} doggo={doggo} />;
        })}
      </div>
    </div>
  );
};

export default DoggoList;
