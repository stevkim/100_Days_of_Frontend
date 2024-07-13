import { MONTHS } from "./constants";

interface CalendarHeaderProps {
  dates: { year: number; month: number };
}

const CalendarHeader = ({ dates }: CalendarHeaderProps) => {
  return (
    <div className="mb-2 flex w-full items-center justify-center">
      <span className="text-lg font-semibold">{MONTHS[dates.month]}</span>
      <span className="ml-2">{dates.year}</span>
    </div>
  );
};

export default CalendarHeader;
