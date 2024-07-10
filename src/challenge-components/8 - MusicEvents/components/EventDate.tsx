import { formatDate } from "../lib/formatDate";
import { getRandomColor } from "../lib/randomColor";

interface Props {
  dateString: string;
}

const EventDate = ({ dateString }: Props) => {
  const { date, time } = formatDate(dateString);

  return (
    <div
      className={`flex flex-col items-center justify-center rounded-md px-4 py-2 text-sm`}
      style={{ backgroundColor: getRandomColor() }}
    >
      {date}
      <span className="text-xl font-semibold">{time}</span>
    </div>
  );
};

export default EventDate;
