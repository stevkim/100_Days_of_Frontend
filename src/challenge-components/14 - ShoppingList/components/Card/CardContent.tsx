import type { TItem } from "../../types/itemType";
import { X } from "lucide-react";
import QuantitySelector from "./QuantitySelector";
import Button from "../Button";
import { useContext } from "react";
import { ItemListContext } from "../../ShoppingList";
import { SIZES } from "../../lib/sizes";

interface CardContentProps {
  item: TItem;
}

const CardContent = ({ item }: CardContentProps) => {
  const { removeItem } = useContext(ItemListContext);

  return (
    <div className="flex w-full flex-col justify-between p-2">
      <div className="flex w-full">
        {item.name}
        {item.size ? <span className="ml-1"> - {SIZES[item.size]}</span> : null}
        <Button
          variant="icon"
          className="ml-auto hover:scale-110"
          onClick={() => removeItem(item.id)}
        >
          <X size={16} />
        </Button>
      </div>
      <div className="flex w-full">
        <QuantitySelector
          itemId={item.id}
          quantity={item.quantity}
          totalQuantity={item.totalQuantity}
        />
        <span className="ml-auto font-semibold">${item.price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CardContent;
