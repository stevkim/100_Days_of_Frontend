import type { TProduct } from "./data";
import Price from "./Price";
import Sizes from "./Sizes";
import { useState } from "react";

interface Props {
  product: TProduct;
}

const Details = ({ product }: Props) => {
  const { brand, productName, description, price, sale, sizes } = product;
  const [activeSize, setActiveSize] = useState<string | null>(() => {
    if (sizes["S"] > 0) {
      return "S";
    } else if (sizes["M"] > 0) {
      return "M";
    } else if (sizes["L"] > 0) {
      return "L";
    } else if (sizes["XL"] > 0) {
      return "XL";
    } else if (sizes["XXL"] > 0) {
      return "XXL";
    } else {
      return null;
    }
  });

  const handleClick = (size: string) => {
    setActiveSize(size);
  };

  return (
    <div className="flex w-full flex-col gap-2 lg:w-[50%]">
      <p className="text-xl text-yellow-600">{brand}</p>
      <h2 className="text-3xl font-semibold">{productName}</h2>
      <p className="text-sm text-gray-500">{description}</p>

      <Price price={price} sale={sale} />

      <div className="flex flex-col">
        <span className="flex items-center">
          CHOOSE A SIZE{" "}
          {activeSize && sizes[activeSize] < 5 ? (
            <span className="ml-2 text-xs text-red-400">LOW STOCK</span>
          ) : null}
        </span>
        <Sizes
          sizes={sizes}
          activeSize={activeSize}
          handleClick={handleClick}
        />
      </div>

      <button className="bg-primary-blue hover:bg-secondary-blue mt-auto w-full rounded-sm py-2 text-white">
        ADD TO BAG
      </button>
    </div>
  );
};

export default Details;
