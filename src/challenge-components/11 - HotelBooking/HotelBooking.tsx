import ImageSection from "./components/ImageSection/ImageSection";
import BookingForm from "./components/BookingForm/BookingForm";
import { HotelData } from "./hotelData";

const HotelBooking = () => {
  const { name, address, images } = HotelData;

  return (
    <section className="flex h-page w-full flex-col items-center justify-center bg-gray-200">
      <div className="relative flex w-[70%] flex-col gap-8 rounded-xl bg-white p-8 shadow-lg md:flex-row">
        <BookingForm name={name} />
        <ImageSection location={{ name, address }} images={images} />
      </div>
    </section>
  );
};

export default HotelBooking;
