import ListHeader from "./components/List/ListHeader";
import SearchDoggo from "./components/List/SearchDoggo";
import { useState, useMemo } from "react";
import { dogs } from "./data";
import DoggoList from "./components/List/DoggoList";

const DogListPage = () => {
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
    <div className="mt-20 flex max-h-[600px] w-full flex-col gap-4 rounded-md bg-white px-4 py-6 shadow-lg md:w-[22rem]">
      <ListHeader />
      <SearchDoggo handleChange={handleChange} />
      <DoggoList list={activeDogs} />
    </div>
  );
};

export default DogListPage;
