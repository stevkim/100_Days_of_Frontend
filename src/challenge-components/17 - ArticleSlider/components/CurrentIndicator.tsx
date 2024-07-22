interface CurrentIndicatorProps {
  articleNumber: number;
}

const CurrentIndicator = ({ articleNumber }: CurrentIndicatorProps) => {
  return (
    <div className="absolute left-[-15px] top-[-15px] z-[10] flex aspect-square w-[2.5rem] items-center justify-center rounded-full bg-white text-lg font-bold">
      {articleNumber}
    </div>
  );
};

export default CurrentIndicator;
