import {
  CardImage,
  CardImageKeys,
  detectCard,
  type CardImageType,
} from "../lib/detectCard";

interface CardNumberIndicatorProps {
  cardNumber: string;
}

const CardNumberIndicator = ({ cardNumber }: CardNumberIndicatorProps) => {
  const CARD_TYPE = detectCard(cardNumber);

  return (
    <div className="ml-auto flex h-[30px]">
      {CardImageKeys.map((key) => {
        if (key !== "unknown") {
          return (
            <img
              src={
                CARD_TYPE === key
                  ? CardImage[key as CardImageType].default
                  : CardImage[key as CardImageType].outline
              }
              className="aspect-video h-full"
            />
          );
        }
      })}
    </div>
  );
};

export default CardNumberIndicator;
