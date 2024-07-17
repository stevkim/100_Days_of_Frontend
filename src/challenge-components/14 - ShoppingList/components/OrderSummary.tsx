import Separator from "@/components/Separator";
import Button from "./Button";
import { getCost } from "../lib/getCost";
import { useContext } from "react";
import { ItemListContext } from "../ShoppingList";
import { getCoupon } from "../lib/getCoupon";
import SummaryRow from "./Summary/SummaryRow";
import Discount from "./Summary/Discount";
import Total from "./Summary/Total";

interface OrderSummaryProps {
  coupon: string;
}

const OrderSummary = ({ coupon }: OrderSummaryProps) => {
  const { itemList } = useContext(ItemListContext);

  const couponDiscount = getCoupon(coupon);
  const shipping = 5;
  const { subtotal, tax, total, discount } = getCost(
    itemList,
    shipping,
    couponDiscount?.discount,
  );

  return (
    <div className="w-full rounded-md bg-white px-6 py-8 shadow-lg">
      <h1 className="mb-4 text-2xl">Order Summary</h1>
      <ul>
        <SummaryRow name="Subtotal" price={subtotal} />
        <Discount discount={discount} coupon={coupon} />
        <SummaryRow name="Tax" price={tax} />
        <SummaryRow name="Shipping" price={shipping} />
        <Separator />
        <Total discount={discount} total={total} />
      </ul>
      <Button className="w-full">Pay now</Button>
    </div>
  );
};

export default OrderSummary;
