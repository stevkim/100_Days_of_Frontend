import { useContext } from "react";
import { CardContext } from "../CardWalletWrapper";
import TransactionsList from "./TransactionsList";

const Transactions = () => {
  const { cards, current } = useContext(CardContext);

  const currentCard = cards[current];

  return (
    <div className="h-[50%] px-4">
      <h4 className="mb-2 h-[10%] text-lg font-semibold">Transactions</h4>
      <TransactionsList list={currentCard.transactions} />
    </div>
  );
};

export default Transactions;
