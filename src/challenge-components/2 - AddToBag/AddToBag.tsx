import ImageDisplay from "./ImageDisplay";
import Details from "./Details";
import { Product } from "./data";

const AddToBag = () => {
  const { images } = Product;

  return (
    <section className="h-page w-full bg-gray-200">
      <div className="flex h-[32rem] w-full flex-col bg-white p-10 shadow-lg lg:flex-row">
        <ImageDisplay images={images} />
        <Details product={Product} />
      </div>
    </section>
  );
};

export default AddToBag;
