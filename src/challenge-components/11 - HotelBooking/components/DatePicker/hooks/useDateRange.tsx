import { useState, useEffect } from "react";

const useDateRange = (start: Date | null, end: Date | null) => {
  const [startDate, setStartDate] = useState<Date | null>(start);
  const [endDate, setEndDate] = useState<Date | null>(end);
  const [dates, setDates] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  });

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const date = new Date(e.currentTarget.dataset.value!);

    const currentTime = date.getTime();
    const startTime = startDate?.getTime();
    const endTime = endDate?.getTime();

    if (!startDate || (startDate && currentTime < startTime!)) {
      setStartDate(date);
    } else if (startDate && !endDate && currentTime > startTime!) {
      setEndDate(date);
    }

    if (startDate && endDate) {
      if (currentTime > endTime!) {
        setEndDate(date);
      } else {
        const left = Math.abs(currentTime - startTime!);
        const right = Math.abs(currentTime - endTime!);

        if (left < right) {
          setStartDate(date);
        } else {
          setEndDate(date);
        }
      }
    }
  };

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

  return { dates, resetDateRange, handleClick };
};

export default useDateRange;
