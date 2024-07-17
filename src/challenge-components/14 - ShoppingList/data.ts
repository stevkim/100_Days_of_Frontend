import tealshirt from "@/assets/14 - ShoppingList/tealshirt.webp";
import whitecrew from "@/assets/14 - ShoppingList/whitecrew.webp";
import peaceshirt from "@/assets/14 - ShoppingList/peaceshirt.webp";
import squadhoodie from "@/assets/14 - ShoppingList/squadhoodie.webp";
import type { TItem } from "./types/itemType";

export const ITEMS: TItem[] = [
  {
    id: "item1",
    name: "Teal Crewneck T-shirt",
    price: 24.99,
    image: tealshirt,
    quantity: 4,
    size: "medium",
  },
  {
    id: "item2",
    name: "White Athletic Sweater",
    price: 44.99,
    image: whitecrew,
    quantity: 2,
    size: "medium",
  },
  {
    id: "item3",
    name: "Skull Peace T-shirt",
    price: 26.99,
    image: peaceshirt,
    quantity: 4,
    size: "small",
  },
  {
    id: "item4",
    name: "Squad Hoodie",
    price: 55,
    image: squadhoodie,
    quantity: 1,
    size: "medium",
  },
];
