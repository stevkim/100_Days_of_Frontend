import DatePicker from "./components/DatePicker/DatePicker";

const HotelBooking = () => {
  const testChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    console.log(e.currentTarget.dataset.value);
  };

  return (
    <section className="flex h-page w-full flex-col items-center justify-center">
      Hotel Booking
      <DatePicker onChange={testChange} />
    </section>
  );
};

export default HotelBooking;
