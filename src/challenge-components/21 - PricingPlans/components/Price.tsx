interface PriceProps {
  price: number;
  billingCycle: boolean;
}

const Price = ({ price, billingCycle }: PriceProps) => {
  if (!billingCycle) {
    return (
      <div>
        {" "}
        ${price}
        <span className="ml-1 text-muted">/month</span>
      </div>
    );
  }

  return (
    <div>
      <span className="mx-1 text-xs text-muted line-through">
        ${(price * 12).toFixed()}
      </span>
      <span>${(price * 11).toFixed()}</span>
      <span className="ml-1 text-muted">/year</span>
    </div>
  );
};

export default Price;
