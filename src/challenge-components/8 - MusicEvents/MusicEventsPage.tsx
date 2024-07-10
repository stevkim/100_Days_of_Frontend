import EventsHeader from "./EventsHeader";
import EventsList from "./EventsList";

const MusicEventsPage = () => {
  return (
    <section className="h-page flex w-full flex-col bg-blue-200 p-[10%]">
      <EventsHeader location="Seattle, Washington" />
      <EventsList />
    </section>
  );
};

export default MusicEventsPage;
