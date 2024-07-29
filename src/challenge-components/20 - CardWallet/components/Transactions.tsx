import TransactionItem from "./TransactionItem";
import { useContext } from "react";
import { CardContext } from "../CardWallet";

const Transactions = () => {
  const { cards, current } = useContext(CardContext);

  const currentCard = cards[current];
  console.log(currentCard);

  return (
    <div className="h-[50%] px-4">
      <h4 className="mb-2 h-[10%] text-lg font-semibold">Transactions</h4>
      <ul className="no-scrollbar h-[90%] overflow-y-scroll">
        {currentCard.transactions.map((transaction) => {
          return (
            <TransactionItem key={transaction.id} transaction={transaction} />
          );
        })}
      </ul>
    </div>
  );
};

export default Transactions;
