import type { TTransaction } from "../data";
import TransactionItem from "./TransactionItem";

interface TransactionsListProps {
  list: TTransaction[];
}

const TransactionsList = ({ list }: TransactionsListProps) => {
  if (list.length < 1) {
    return (
      <div className="w-full text-center text-muted">
        No transactions at this time
      </div>
    );
  }

  return (
    <ul className="no-scrollbar h-[90%] overflow-y-scroll">
      {list.map((transaction) => {
        return (
          <TransactionItem key={transaction.id} transaction={transaction} />
        );
      })}
    </ul>
  );
};

export default TransactionsList;
