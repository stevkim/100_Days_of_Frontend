import { Minus, Plus } from "lucide-react";
import Button from "../Button";
import { useContext } from "react";
import { ItemListContext } from "../../ShoppingList";

interface QuantitySelectorProps {
  itemId: string;
  quantity: number;
  totalQuantity: number;
}

const QuantitySelector = ({
  quantity,
  totalQuantity,
  itemId,
}: QuantitySelectorProps) => {
  const { incrementQuantity, decrementQuantity } = useContext(ItemListContext);

  return (
    <div className="flex items-center gap-2">
      <Button
        className="bg-gray-200 hover:bg-gray-300"
        variant="icon"
        disabled={quantity <= 1}
        onClick={() => decrementQuantity(itemId)}
      >
        <Minus size={16} />
      </Button>
      {quantity}
      <Button
        className="bg-gray-200 hover:bg-gray-300"
        variant="icon"
        disabled={quantity === totalQuantity}
        onClick={() => incrementQuantity(itemId)}
      >
        <Plus size={14} />
      </Button>
    </div>
  );
};

export default QuantitySelector;
