import CalendarDayList from "./components/CalendarDayList";
import CalendarHeader from "./components/CalendarHeader";
import { tw } from "@/utils/twMerge";
import useDateRange from "./hooks/useDateRange";
import useDate from "./hooks/useDate";
import { createContext, useMemo, useEffect } from "react";
import { getDayList } from "./lib/getDayList";
import "./DatePicker.css";

interface DatePickerProps {
  className?: string;
  startDate?: Date | null;
  endDate?: Date | null;
  onChange?: (e: { start: Date | null; end: Date | null }) => void;
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

const DatePicker = ({
  startDate = null,
  endDate = null,
  onChange,
  className,
  ...props
}: DatePickerProps) => {
  const {
    dates: { start, end },
    resetDateRange,
    handleClick,
  } = useDateRange(startDate, endDate);
  const { currentDates, totalDays, firstDay, updateMonth, setCurrentDates } =
    useDate(resetDateRange);

  const daysList = useMemo(
    () => getDayList(firstDay, totalDays, currentDates),
    [currentDates, firstDay, totalDays],
  );

  const selectMonthYear = (input: { month: number; year: number }) => {
    resetDateRange();
    setCurrentDates(input);
  };

  useEffect(() => {
    if (onChange) {
      onChange({ start, end });
    }
  }, [start, end, onChange]);

  return (
    <div
      className={tw("datePicker rounded-md bg-white p-2", className)}
      {...props}
    >
      <DateContext.Provider
        value={{ date: currentDates, setDate: selectMonthYear }}
      >
        <CalendarHeader update={updateMonth} />
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
