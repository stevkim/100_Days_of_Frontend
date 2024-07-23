import { useState } from "react";

export interface Controls {
  index: number;
  incrementIndex: () => void;
  decrementIndex: () => void;
  setIndex: (input: number) => void;
}

export default function useList<T>(initValues: T[]): [T[], Controls] {
  const [list] = useState(initValues);
  const [index, setIndex] = useState(0);

  const Controls = {
    index,
    incrementIndex: () => {
      if (index + 1 >= list.length) {
        setIndex(0);
      } else {
        setIndex((prev) => prev + 1);
      }
    },
    decrementIndex: () => {
      if (index - 1 <= 0) {
        setIndex(list.length - 1);
      } else {
        setIndex((prev) => prev - 1);
      }
    },
    setIndex,
  };

  return [list, Controls];
}
