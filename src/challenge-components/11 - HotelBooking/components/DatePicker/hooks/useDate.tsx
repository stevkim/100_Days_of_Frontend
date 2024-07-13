import { useState } from "react";

const useDate = (resetDateRange: () => void) => {
  const [today] = useState(() => {
    const tempDate = Date.now();
    return new Date(tempDate);
  });
  const [currentDates, setCurrentDates] = useState(() => {
    return {
      month: today.getMonth(),
      year: today.getFullYear(),
    };
  });

  const firstDay = new Date(currentDates.year, currentDates.month, 1).getDay();
  const totalDays = new Date(
    currentDates.year,
    currentDates.month + 1,
    0,
  ).getDate();

  const incrementMonth = () => {
    if (currentDates.month + 1 > 11) {
      setCurrentDates({
        month: 0,
        year: currentDates.year + 1,
      });
    } else {
      setCurrentDates({
        ...currentDates,
        month: currentDates.month + 1,
      });
    }
    resetDateRange();
  };

  const decrementMonth = () => {
    if (currentDates.month - 1 < 0) {
      setCurrentDates({
        month: 11,
        year: currentDates.year - 1,
      });
    } else {
      setCurrentDates({
        ...currentDates,
        month: currentDates.month - 1,
      });
    }
    resetDateRange();
  };

  return {
    firstDay,
    totalDays,
    updateMonth: { incrementMonth, decrementMonth },
    currentDates,
    setCurrentDates,
  };
};

export default useDate;
