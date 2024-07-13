import DatePicker from "./components/DatePicker/DatePicker";

const HotelBooking = () => {
  return (
    <section className="flex h-page w-full flex-col items-center justify-center">
      Hotel Booking
      <DatePicker onChange={(e) => console.log(e)} />
    </section>
  );
};

export default HotelBooking;
