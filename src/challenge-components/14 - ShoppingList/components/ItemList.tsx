import ItemCard from "./ItemCard";
import { useContext } from "react";
import { ItemListContext } from "../ShoppingList";

const ItemList = () => {
  const { itemList } = useContext(ItemListContext);

  const totalItems = itemList.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="w-full rounded-md bg-white px-4 py-8 shadow-lg md:w-[60%]">
      <h1 className="mb-4 flex w-full items-center text-2xl">
        Your item list{" "}
        <span className="ml-auto text-base text-gray-400">
          {totalItems} Item(s)
        </span>
      </h1>
      <div className="flex w-full flex-col gap-4">
        {itemList.map((item) => {
          return <ItemCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
