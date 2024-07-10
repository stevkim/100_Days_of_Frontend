import EventCard from "./EventCard";
import type { TEvent } from "./eventsData";

interface Props {
  list: TEvent[];
}

const EventsList = ({ list }: Props) => {
  return (
    <div className="mt-4 flex flex-col gap-2">
      {list.map((event) => {
        return <EventCard key={event.name} event={event} />;
      })}
    </div>
  );
};

export default EventsList;
