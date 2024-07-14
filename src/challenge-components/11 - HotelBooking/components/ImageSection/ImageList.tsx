interface ImageListProps {
  list: string[];
  handleClick: (e: React.MouseEvent<HTMLButtonElement>, image: string) => void;
}

const ImageList = ({ list, handleClick }: ImageListProps) => {
  return (
    <div className="flex h-[30%] gap-4">
      {list.map((item) => {
        return (
          <button
            className="aspect-square w-full"
            key={item}
            onClick={(e) => handleClick(e, item)}
          >
            <img
              src={item}
              alt={item}
              className="h-full w-full rounded-sm object-cover shadow-sm"
            />
          </button>
        );
      })}
    </div>
  );
};

export default ImageList;
