interface SummaryRowProps {
  name: string;
  price: number;
}

const SummaryRow = ({ name, price }: SummaryRowProps) => {
  return (
    <li className="mb-4 flex w-full">
      {name}
      <span className="ml-auto font-semibold">${price.toFixed(2)}</span>
    </li>
  );
};

export default SummaryRow;
