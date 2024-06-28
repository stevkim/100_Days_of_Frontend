import ImageDisplay from "./ImageDisplay";
import Details from "./Details";
import { Product } from "./data";

const AddToBag = () => {
  const { images } = Product;

  return (
    <section className="flex h-[32rem] w-full flex-col p-10 lg:flex-row">
      <ImageDisplay images={images} />
      <Details product={Product} />
    </section>
  );
};

export default AddToBag;
