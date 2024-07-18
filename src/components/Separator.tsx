import { tw } from "@/utils/twMerge";

interface Props {
  type?: "horizontal" | "vertical";
  className?: string;
}

const Separator = ({ type = "horizontal", className }: Props) => {
  const orientation =
    type === "horizontal" ? "my-4 h-[2px] w-auto " : "mx-4 h-auto w-[2px] ";

  return (
    <div className={tw(orientation, "bg-muted opacity-50", className)}></div>
  );
};

export default Separator;
