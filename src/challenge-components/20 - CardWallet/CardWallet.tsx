import CardDisplay from "./components/CardDisplay";
import { CARDS, type TCard } from "./data";
import { useState, createContext } from "react";
import Transactions from "./components/Transactions";

export const CardContext = createContext<{
  cards: TCard[];
  addCard: (newCard: TCard, makeDefault?: boolean) => void;
  current: number;
  handleSwipeLeft: () => void;
  handleSwipeRight: () => void;
  setCurrent: (input: number) => void;
}>({
  cards: [],
  addCard: () => {},
  current: 0,
  handleSwipeLeft: () => {},
  handleSwipeRight: () => {},
  setCurrent: () => {},
});

const CardWallet = () => {
  const [cards, setCards] = useState<TCard[]>(CARDS);
  const [current, setCurrent] = useState(0);

  const addCard = (newCard: TCard, makeDefault: boolean = false) => {
    if (makeDefault) {
      setCards([newCard, ...cards]);
    } else {
      setCards([...cards, newCard]);
    }
  };

  const handleSwipeLeft = () => {
    if (current - 1 <= 0) {
      setCurrent(0);
    } else {
      setCurrent((prev) => prev - 1);
    }
  };

  const handleSwipeRight = () => {
    if (current + 1 >= cards.length) {
      setCurrent(cards.length - 1);
    } else {
      setCurrent((prev) => prev + 1);
    }
  };

  return (
    <section className="flex h-page w-full justify-center bg-gray-200">
      <div className="mt-20 h-full max-h-[800px] w-full max-w-[500px] overflow-hidden rounded-2xl bg-white">
        <CardContext.Provider
          value={{
            cards,
            addCard,
            current,
            handleSwipeLeft,
            handleSwipeRight,
            setCurrent,
          }}
        >
          <CardDisplay />
          <Transactions />
        </CardContext.Provider>
      </div>
    </section>
  );
};

export default CardWallet;
