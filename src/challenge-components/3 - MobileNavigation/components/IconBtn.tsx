interface Props {
  Icon: React.ElementType;
}

const IconBtn = ({ Icon }: Props) => {
  return (
    <button className="hover:bg-gray-100 text-gray-400 hover:text-blue-300 flex aspect-square w-7 items-center justify-center rounded-full">
      <Icon size={18} color="currentColor" strokeWidth={2.5} />
    </button>
  );
};

export default IconBtn;
