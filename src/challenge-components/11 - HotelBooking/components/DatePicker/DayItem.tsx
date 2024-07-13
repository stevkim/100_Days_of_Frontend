import { useMemo, useContext } from "react";
import { DateRangeContext } from "./DatePicker";

interface DayItemProps {
  date: Date;
}

const DayItem = ({ date }: DayItemProps) => {
  const { start, end, updateRange } = useContext(DateRangeContext);
  const isActive = useMemo(() => {
    const current = date.getTime();
    const left = start?.getTime();
    const right = end?.getTime();

    if (current === left || current === right) {
      return "bg-blue-600";
    } else if (left && right && current > left && current < right) {
      return "bg-blue-400";
    } else {
      return "";
    }
  }, [date, start, end]);

  return (
    <div
      key={date.toISOString()}
      onClick={updateRange}
      data-value={date}
      className={`w-full text-center ${isActive}`}
    >
      {date.getDate()}
    </div>
  );
};

export default DayItem;
