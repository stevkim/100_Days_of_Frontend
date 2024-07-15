import ImageSection from "./ImageSection";
import { restaurantData, reviewsData } from "../restaurantData";
import CardContent from "./CardContent";

const RestaurantCard = () => {
  const { name, description, address, images } = restaurantData;
  const restaurantInfo = { name, description, address, reviews: reviewsData };

  const handleClick = () => {
    alert("Clickity click clack");
  };

  return (
    <div className="relative flex h-full max-h-[500px] w-full max-w-[320px] flex-col overflow-hidden rounded-lg shadow-lg">
      <ImageSection list={images} />
      <CardContent data={restaurantInfo} />
      <button
        onClick={handleClick}
        className="mt-auto h-[8%] w-full bg-black text-sm text-white hover:bg-slate-600"
      >
        Make a Reservation
      </button>
    </div>
  );
};

export default RestaurantCard;
