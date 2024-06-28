import { convertToDollars, salePrice } from "./lib/price";

interface Props {
  sale: number | null;
  price: number;
}

const Price = ({ sale, price }: Props) => {
  const OriginalPrice = () => {
    if (sale) {
      return (
        <div className="text-muted text-sm line-through">
          {convertToDollars(price)}
        </div>
      );
    } else {
      return (
        <div className="text-3xl font-semibold">{convertToDollars(price)}</div>
      );
    }
  };

  const PriceAfterDiscount = salePrice(price, sale);

  return (
    <div className="my-8">
      {sale ? (
        <div className="mb-2 flex items-center text-3xl font-semibold">
          {convertToDollars(PriceAfterDiscount!)}
          <sup className="ml-2 rounded-sm bg-[#96ccf9] p-1 text-xs text-secondary-blue">
            -{sale}%
          </sup>
        </div>
      ) : null}
      {OriginalPrice()}
    </div>
  );
};

export default Price;
