interface Props {
  type?: "horizontal" | "vertical";
}

const Separator = ({ type = "horizontal" }: Props) => {
  const orientation =
    type === "horizontal" ? "my-4 h-[2px] w-auto " : "mx-4 h-auto w-[2px] ";

  return <div className={orientation + "bg-muted opacity-50"}></div>;
};

export default Separator;
