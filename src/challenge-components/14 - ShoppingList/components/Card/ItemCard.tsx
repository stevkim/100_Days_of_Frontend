import type { TItem } from "../../types/itemType";
import CardContent from "./CardContent";

interface ItemCardProps {
  item: TItem;
}

const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <div className="flex h-[80px] w-full">
      <img
        src={item.image}
        className="aspect-square h-full rounded-md object-cover shadow-lg"
      />
      <CardContent item={item} />
    </div>
  );
};

export default ItemCard;
