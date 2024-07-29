import { TTransaction } from "../data";
import { TransactionType } from "../lib/TransactionTypes";

interface TransactionItemProps {
  transaction: TTransaction;
}

const TransactionItem = ({ transaction }: TransactionItemProps) => {
  return (
    <li className="mb-2 flex h-[3rem] w-full">
      <img
        src={TransactionType[transaction.type]}
        className="aspect-square h-full"
      />
      <div className="ml-4">
        {transaction.type}
        <span className="block">
          {new Date(transaction.date).toLocaleDateString()}
        </span>
      </div>
      <div className="ml-auto">{transaction.amount}</div>
    </li>
  );
};

export default TransactionItem;
