import { ChevronLeft, ChevronRight } from "lucide-react";
import MonthSelector from "./Selectors/MonthSelector";
import YearSelector from "./Selectors/YearSelector";

interface CalendarHeaderProps {
  update: { incrementMonth: () => void; decrementMonth: () => void };
}

const CalendarHeader = ({ update }: CalendarHeaderProps) => {
  return (
    <div className="mb-2 flex w-full items-center justify-between">
      <button onClick={update.decrementMonth}>
        <ChevronLeft size={16} />
      </button>
      <div>
        <MonthSelector />
        <YearSelector />
      </div>
      <button onClick={update.incrementMonth}>
        <ChevronRight size={16} />
      </button>
    </div>
  );
};

export default CalendarHeader;
