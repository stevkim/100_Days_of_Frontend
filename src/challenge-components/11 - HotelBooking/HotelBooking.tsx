import ImageSection from "./components/ImageSection/ImageSection";
import { HotelData } from "./hotelData";

const HotelBooking = () => {
  const { name, address, images } = HotelData;

  return (
    <section className="flex h-page w-full flex-col items-center justify-center bg-gray-200">
      <div className="flex h-[600px] w-[70%] flex-col rounded-xl bg-white p-8 shadow-lg md:flex-row">
        <div className="w-[45%]">Hotel Booking</div>
        <ImageSection location={{ name, address }} images={images} />
      </div>
    </section>
  );
};

export default HotelBooking;
