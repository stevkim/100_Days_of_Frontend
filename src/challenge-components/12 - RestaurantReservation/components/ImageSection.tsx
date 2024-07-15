import { useState } from "react";

interface ImageSectionProps {
  list: string[];
}

const ImageSection = ({ list }: ImageSectionProps) => {
  const [index, setIndex] = useState(0);

  const handleChangeDisplay = (index: number) => {
    setIndex(index);
  };

  const incrementDisplay = () => {
    if (index + 1 >= list.length) {
      setIndex(0);
    } else {
      setIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="relative aspect-video w-full">
      <img
        onClick={incrementDisplay}
        src={list[index]}
        alt={list[index]}
        className="h-full w-full object-cover shadow-lg"
      />
      <div className="absolute bottom-2 flex w-full justify-center gap-2">
        {list.map((image, i) => {
          return (
            <button
              key={image}
              onClick={() => handleChangeDisplay(i)}
              className={`h-2 w-2 rounded-full ${index === i ? "bg-white" : "bg-gray-400"}`}
              disabled={index === i}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSection;
