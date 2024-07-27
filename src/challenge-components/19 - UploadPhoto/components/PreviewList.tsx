import PreviewListItem from "./PreviewListItem";

interface PreviewListProps {
  images: File[];
  removeImage: (input: File) => void;
}

const PreviewList = ({ images, removeImage }: PreviewListProps) => {
  return (
    <div className="flex w-full flex-col gap-2">
      {images.map((image) => {
        return (
          <PreviewListItem
            key={image.name}
            image={image}
            removeImage={removeImage}
          />
        );
      })}
    </div>
  );
};

export default PreviewList;
