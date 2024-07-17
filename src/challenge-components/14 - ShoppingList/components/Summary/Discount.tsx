interface DiscountProps {
  coupon: string;
  discount: number;
}

const Discount = ({ coupon, discount }: DiscountProps) => {
  if (discount <= 0) return null;

  return (
    <li className="mb-4 flex w-full items-center">
      <span className="text-sm italic">Code: "{coupon.toUpperCase()}"</span>
      <span className="ml-auto font-semibold text-red-500">
        -${discount.toFixed(2)}
      </span>
    </li>
  );
};

export default Discount;
