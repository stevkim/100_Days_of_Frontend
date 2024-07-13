import { MONTHS } from "../../constants";
import { useContext } from "react";
import { DateContext } from "../../DatePicker";

const MonthSelector = () => {
  const {
    date: { year, month },
    setDate,
  } = useContext(DateContext);

  return (
    <select
      className="text-center text-lg font-semibold"
      value={month}
      onChange={(e) =>
        setDate({
          year,
          month: parseInt(e.target.value),
        })
      }
    >
      {MONTHS.map((month, index) => {
        return (
          <option key={month} value={index}>
            {month}
          </option>
        );
      })}
    </select>
  );
};

export default MonthSelector;
