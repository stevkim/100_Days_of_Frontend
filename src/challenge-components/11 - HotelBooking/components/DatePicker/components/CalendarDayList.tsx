import { DAYS_OF_WEEK } from "../constants";
import DayItem from "./DayItem";

interface CalendarDaysProps {
  list: (string | Date)[];
}

const CalendarDayList = ({ list }: CalendarDaysProps) => {
  return (
    <div id="calendar-day-list" className="grid grid-cols-7 gap-y-2">
      {DAYS_OF_WEEK.map((day) => {
        return (
          <div key={day} className="mx-auto">
            {day}
          </div>
        );
      })}
      {list.map((entry) => {
        if (typeof entry === "string") {
          return <div key={entry}></div>;
        } else {
          return <DayItem key={entry.toISOString()} date={entry} />;
        }
      })}
    </div>
  );
};

export default CalendarDayList;
