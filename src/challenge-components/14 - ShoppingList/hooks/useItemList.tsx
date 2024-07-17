import { useState } from "react";
import { ITEMS } from "../data";

const useItemList = () => {
  const [itemList, setItemList] = useState(ITEMS);

  const incrementQuantity = (id: string) => {
    const newList = itemList.map((item) => {
      if (item.id === id) {
        item.quantity++;
      }
      return item;
    });
    setItemList(newList);
  };

  const decrementQuantity = (id: string) => {
    const newList = itemList.map((item) => {
      if (item.id === id) {
        item.quantity--;
      }
      return item;
    });
    setItemList(newList);
  };

  const removeItem = (id: string) => {
    const newList = itemList.filter((item) => item.id !== id);
    setItemList(newList);
  };

  return { itemList, incrementQuantity, decrementQuantity, removeItem };
};

export default useItemList;
