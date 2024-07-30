import { formatAmount } from "../lib/formatAmount";

interface TransactionAmountProps {
  amount: number;
}

const TransactionAmount = ({ amount }: TransactionAmountProps) => {
  const minus = amount < 0;

  const styles = {
    gain: "bg-green-200 text-green-500",
    loss: "bg-red-200 text-red-500",
  };

  return (
    <div
      className={`ml-auto h-fit w-fit rounded-md px-1 text-sm font-semibold ${minus ? styles.loss : styles.gain}`}
    >
      {formatAmount(Math.abs(amount), minus)}
    </div>
  );
};

export default TransactionAmount;
