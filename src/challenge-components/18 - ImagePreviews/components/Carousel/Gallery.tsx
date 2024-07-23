import MainDisplay from "./MainDisplay";
import ImageCarousel from "./ImageCarousel";
import { useContext } from "react";
import { ImageListcontext } from "../../ImagePreview";

const Gallery = () => {
  const {
    list,
    controls: { index },
  } = useContext(ImageListcontext);

  return (
    <div className="main-area p-8">
      <MainDisplay image={list[index]} />
      <ImageCarousel list={list} />
    </div>
  );
};

export default Gallery;
