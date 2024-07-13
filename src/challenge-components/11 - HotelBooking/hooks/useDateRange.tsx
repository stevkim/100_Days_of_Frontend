import { useState, useEffect } from "react";

const useDateRange = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [dates, setDates] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  });

  const resetDateRange = () => {
    setStartDate(null);
    setEndDate(null);
  };

  useEffect(() => {
    setDates({
      start: startDate,
      end: endDate,
    });
  }, [startDate, endDate]);

  return { dates, resetDateRange, setStartDate, setEndDate };
};

export default useDateRange;
