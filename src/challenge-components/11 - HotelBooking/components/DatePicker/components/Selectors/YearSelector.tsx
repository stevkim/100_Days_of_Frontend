import { useContext } from "react";
import { DateContext } from "../../DatePicker";
import { getYearRange } from "../../lib/getYearRange.ts";

const YearSelector = () => {
  const {
    date: { year, month },
    setDate,
  } = useContext(DateContext);

  const years = getYearRange();

  return (
    <select
      className="ml-2 text-sm"
      value={year}
      onChange={(e) => setDate({ month, year: parseInt(e.target.value) })}
    >
      {years.map((year) => {
        return (
          <option key={year} value={year}>
            {year}
          </option>
        );
      })}
    </select>
  );
};

export default YearSelector;
