import Card from "./Card";
import { motion, PanInfo } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { CardContext } from "../CardWalletWrapper";

const CardList = () => {
  const { cards, current, handleSwipeLeft, handleSwipeRight } =
    useContext(CardContext);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (wrapperRef.current && wrapperRef.current.offsetParent) {
      setOffset(
        wrapperRef.current.offsetWidth * current -
          wrapperRef.current.offsetWidth * 0.075 * current -
          wrapperRef.current.offsetWidth * 0.05,
      );
    }
  }, [cards, current]);

  const handleSwipe = (e: PointerEvent, info: PanInfo) => {
    e.preventDefault();

    if (info.offset.x > 100) {
      handleSwipeLeft();
    }
    if (info.offset.x < -100) {
      handleSwipeRight();
    }
  };

  return (
    <motion.div className="my-4 h-full w-full overflow-hidden" ref={wrapperRef}>
      <motion.div
        className="flex flex-row gap-[10px]"
        drag="x"
        dragConstraints={{ left: -10, right: 10 }}
        animate={{ x: -offset }}
        onDragEnd={handleSwipe}
      >
        {cards.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </motion.div>
    </motion.div>
  );
};

export default CardList;
