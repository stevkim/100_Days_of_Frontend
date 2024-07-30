import { TTransaction } from "../data";
import { TransactionType } from "../lib/TransactionTypes";
import TransactionAmount from "./TransactionAmount";

interface TransactionItemProps {
  transaction: TTransaction;
}

const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const typeStyles = {
    Travel: "bg-blue-100",
    Work: "bg-red-100",
    Food: "bg-green-100",
    Shopping: "bg-green-200",
  };

  return (
    <li className="mb-4 flex h-[3rem] w-full items-center">
      <img
        src={TransactionType[transaction.type]}
        className={`aspect-square h-full rounded-lg p-1 ${typeStyles[transaction.type]}`}
      />
      <div className="ml-4">
        {transaction.type}
        <span className="block text-xs text-muted">
          {new Date(transaction.date).toLocaleDateString()}
        </span>
      </div>
      <TransactionAmount amount={transaction.amount} />
    </li>
  );
};

export default TransactionItem;
