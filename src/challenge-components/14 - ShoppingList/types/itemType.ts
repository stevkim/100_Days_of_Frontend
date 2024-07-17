type Sizes = "small" | "medium" | "large";

export type TItem = {
  id: string;
  name: string;
  size: Sizes;
  price: number;
  image: string;
  quantity: number;
};
