import ItemList from "./components/ItemList";
import { createContext } from "react";
import useItemList from "./hooks/useItemList";
import type { TItem } from "./types/itemType";

export const ItemListContext = createContext<{
  itemList: TItem[];
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  removeItem: (id: string) => void;
}>({
  itemList: [],
  incrementQuantity: () => {},
  decrementQuantity: () => {},
  removeItem: () => {},
});

const ShoppingList = () => {
  const { itemList, incrementQuantity, decrementQuantity, removeItem } =
    useItemList();

  return (
    <section className="flex h-page w-full items-center justify-center bg-gray-200">
      <ItemListContext.Provider
        value={{ itemList, incrementQuantity, decrementQuantity, removeItem }}
      >
        <div className="flex w-full flex-col border-2 md:w-[70%] md:flex-row">
          <ItemList />
        </div>
      </ItemListContext.Provider>
    </section>
  );
};

export default ShoppingList;
