import { TCard } from "../data";
import { Dot } from "lucide-react";
import { detectCard, CardImage } from "../lib/detectCard";

interface CardProps {
  card: TCard;
}

const Card = ({ card }: CardProps) => {
  const { cardNumber } = card;
  const Dots = new Array(12).fill(null);

  return (
    <div className={`min-w-[90%] rounded-lg bg-blue-200 p-4`}>
      <div className="text-3xl">
        <span className="block text-xs">Balance</span>${card.balance}
      </div>
      <div className="my-4 flex items-center">
        {Dots.map((_, index) => {
          return (
            <Dot
              key={`dot-${index}`}
              className={`${(index + 1) % 4 === 0 ? "mr-2" : ""}`}
              size={12}
              strokeWidth={12}
            />
          );
        })}
        {cardNumber.slice(cardNumber.length - 4)}
      </div>
      <div className="flex items-center justify-between">
        <div className="text-xs">
          <span className="block">Expires</span>
          {card.expireDate}
        </div>

        <img
          src={CardImage[detectCard(cardNumber)].card}
          className="pointer-events-none h-[2.5rem]"
        />
      </div>
    </div>
  );
};

export default Card;
