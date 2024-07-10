import type { TEvent } from "./eventsData";
import EventDate from "./components/EventDate";
import BuyTicketBtn from "./components/BuyTicketBtn";

interface Props {
  event: TEvent;
}

const EventCard = ({ event }: Props) => {
  const { name, artist, venue, venueAddress, date, availableTickets } = event;

  return (
    <div className="flex flex-row items-center gap-4 rounded-lg bg-white p-4">
      <EventDate dateString={date} />
      <p className="flex flex-col">
        <span className="text-xl font-semibold">
          {name} - {artist}
        </span>
        <span>{venue}</span>
        <span className="text-sm text-muted">{venueAddress}</span>
      </p>
      <div className="ml-auto flex min-w-[120px] items-center justify-center text-center">
        {availableTickets === 0 ? <>Sold out!</> : <BuyTicketBtn />}
      </div>
    </div>
  );
};

export default EventCard;
