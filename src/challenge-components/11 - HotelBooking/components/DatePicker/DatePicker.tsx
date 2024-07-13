import CalendarDayList from "./components/CalendarDayList";
import CalendarHeader from "./components/CalendarHeader";
import { tw } from "@/utils/twMerge";
import useDateRange from "./hooks/useDateRange";
import useDate from "./hooks/useDate";
import { createContext, useMemo } from "react";
import "./DatePicker.css";

interface DatePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const DateRangeContext = createContext<{
  start: Date | null;
  end: Date | null;
  updateRange: (e: React.MouseEvent<HTMLDivElement>) => void;
}>({ start: null, end: null, updateRange: () => {} });

export const DateContext = createContext<{
  date: { year: number; month: number };
  setDate: (input: { year: number; month: number }) => void;
}>({ date: { year: 0, month: 0 }, setDate: () => {} });

const DatePicker = ({ className, ...props }: DatePickerProps) => {
  const {
    dates: { start, end },
    resetDateRange,
    setStartDate,
    setEndDate,
  } = useDateRange();
  const {
    currentDates,
    totalDays,
    firstDay,
    incrementMonth,
    decrementMonth,
    setCurrentDates,
  } = useDate(resetDateRange);

  const daysList = useMemo(() => {
    const DAYLIST = [];

    // Gray days
    for (let i = 0; i < firstDay; i++) {
      DAYLIST.push("empty" + i);
    }

    // Days
    for (let j = 0; j < totalDays; j++) {
      const tempDate = new Date(currentDates.year, currentDates.month, j + 1);

      DAYLIST.push(tempDate);
    }

    return DAYLIST;
  }, [currentDates, firstDay, totalDays]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const date = new Date(e.currentTarget.dataset.value!);

    const currentTime = date.getTime();
    const startTime = start?.getTime();
    const endTime = end?.getTime();

    if (!start || (start && currentTime < startTime!)) {
      setStartDate(date);
    } else if (start && !end && currentTime > startTime!) {
      setEndDate(date);
    }

    if (start && end) {
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

  const selectMonthYear = (input: { month: number; year: number }) => {
    resetDateRange();
    setCurrentDates(input);
  };

  return (
    <div className={tw("", className)} {...props}>
      <DateContext.Provider
        value={{ date: currentDates, setDate: selectMonthYear }}
      >
        <CalendarHeader update={{ incrementMonth, decrementMonth }} />
      </DateContext.Provider>
      <DateRangeContext.Provider
        value={{ start, end, updateRange: handleClick }}
      >
        <CalendarDayList list={daysList} />
      </DateRangeContext.Provider>
    </div>
  );
};

export default DatePicker;
