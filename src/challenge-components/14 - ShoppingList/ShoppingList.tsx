import ItemList from "./components/ItemList";
import { createContext, useState } from "react";
import useItemList from "./hooks/useItemList";
import type { TItem } from "./types/itemType";
import OrderSummary from "./components/OrderSummary";
import Coupon from "./components/Coupon";

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
  const [coupon, setCoupon] = useState("");

  const handleCouponChange = (value: string) => {
    setCoupon(value);
  };

  return (
    <section className="flex h-page w-full justify-center bg-gray-200 py-8 sm:px-8 lg:items-center">
      <ItemListContext.Provider
        value={{ itemList, incrementQuantity, decrementQuantity, removeItem }}
      >
        <div className="flex w-full flex-col gap-4 overflow-y-auto border-2 lg:w-[70%] lg:flex-row">
          <ItemList />
          <div className="flex w-full flex-col gap-4 lg:w-[40%]">
            <OrderSummary coupon={coupon} />
            <Coupon coupon={coupon} handleCouponChange={handleCouponChange} />
          </div>
        </div>
      </ItemListContext.Provider>
    </section>
  );
};

export default ShoppingList;
