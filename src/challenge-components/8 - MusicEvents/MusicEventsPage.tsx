import EventsHeader from "./EventsHeader";
import EventsList from "./EventsList";
import { EventsData } from "./eventsData";

const MusicEventsPage = () => {
  return (
    <section className="flex h-page w-full flex-col bg-gray-200 p-[10%]">
      <EventsHeader location="Seattle, Washington" />
      <EventsList list={EventsData} />
    </section>
  );
};

export default MusicEventsPage;
