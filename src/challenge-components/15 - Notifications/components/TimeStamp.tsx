import { getTimeStamp } from "../lib/getTimeStamp";

interface TimeStampProps {
  time: number;
}

const TimeStamp = ({ time }: TimeStampProps) => {
  return <span className="text-[.6rem] text-muted">{getTimeStamp(time)}</span>;
};

export default TimeStamp;
