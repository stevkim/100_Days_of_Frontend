import image1 from "@/assets/2- AddToBag/whiteshirt1.jpg";
import image2 from "@/assets/2- AddToBag/whiteshirt2.jpg";

export type TSizes = {
  [key: string]: number;
  S: number;
  M: number;
  L: number;
  XL: number;
  XXL: number;
};

export type TProduct = {
  id: string;
  brand: string;
  productName: string;
  description: string;
  images: string[];
  price: number;
  sale: number | null;
  sizes: TSizes;
};

export const Product = {
  id: "ABC123",
  brand: "yellow.",
  productName: "100% Cotton White T-shirt",
  description: "The perfect white shirt, crew neck cut. 100% cotton.",
  images: [image1, image2],
  price: 99,
  sale: 25,
  sizes: {
    S: 10,
    M: 0,
    L: 1,
    XL: 10,
    XXL: 5,
  },
};
