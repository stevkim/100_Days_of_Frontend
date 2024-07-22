interface ListIndicatorProps {
  articleIndex: number;
  listLength: number;
  setArticleIndex: (value: number) => void;
}

const ListIndicator = ({
  articleIndex,
  listLength,
  setArticleIndex,
}: ListIndicatorProps) => {
  const list = new Array(listLength).fill(0);

  return (
    <div className="absolute bottom-[-10%] flex w-full flex-row justify-center gap-2">
      {list.map((_, index) => {
        return (
          <button
            key={"article indicator #" + index}
            className={`aspect-square w-[.5rem] rounded-full ${articleIndex === index ? "bg-gray-600" : "bg-gray-400"}`}
            onClick={() => setArticleIndex(index)}
          ></button>
        );
      })}
    </div>
  );
};

export default ListIndicator;
