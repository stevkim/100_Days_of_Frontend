interface Props {
  images: string[];
  handleClick: (newImage: string) => void;
}

const ImageThumbnails = ({ images, handleClick }: Props) => {
  return (
    <div className="flex h-full w-[15%] flex-col gap-2">
      {images.map((image) => {
        return (
          <button key={image} onClick={() => handleClick(image)}>
            <img
              src={image}
              className="aspect-square w-full object-cover"
              alt="Image of the product"
            />
          </button>
        );
      })}
    </div>
  );
};

export default ImageThumbnails;
