import { Dot } from "lucide-react";
import { useContext } from "react";
import { CardContext } from "../CardWallet";

const CardIndicator = () => {
  const { cards, current, setCurrent } = useContext(CardContext);

  const indicators = new Array(cards.length).fill(null);

  return (
    <div className="absolute bottom-5 left-0 flex w-full justify-center">
      {indicators.map((_, index) => {
        return (
          <button
            onClick={() => setCurrent(index)}
            role="button"
            key={`indicator-${index}`}
          >
            <Dot
              size={14}
              color={index === current ? "blue" : "lightgray"}
              strokeWidth={14}
            />
          </button>
        );
      })}
    </div>
  );
};

export default CardIndicator;
