interface TotalProps {
  discount: number;
  total: number;
}

const Total = ({ discount, total }: TotalProps) => {
  return (
    <li className="mb-4 flex w-full text-xl font-semibold">
      {"Total"}
      {discount > 0 ? (
        <div className="ml-auto">
          <span className="mr-2 text-xs text-red-500 line-through">
            ${total.toFixed(2)}
          </span>
          ${(total - discount).toFixed(2)}
        </div>
      ) : (
        <span className="ml-auto">${total.toFixed(2)}</span>
      )}
    </li>
  );
};

export default Total;
