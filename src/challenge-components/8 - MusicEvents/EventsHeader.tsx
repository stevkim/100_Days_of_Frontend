interface Props {
  location: string;
}

const EventsHeader = ({ location }: Props) => {
  return (
    <div>
      <h2 className="text-3xl font-bold">Music Events</h2>
      <p className="text-sm">in {location}</p>
    </div>
  );
};

export default EventsHeader;
