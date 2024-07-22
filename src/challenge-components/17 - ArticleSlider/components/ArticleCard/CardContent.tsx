import { formatContentLength } from "../../lib/formatContentLength";

interface CardContentProps {
  title: string;
  content: string;
}

const CardContent = ({ title, content }: CardContentProps) => {
  return (
    <>
      <h4 className="text-lg font-bold">{title}</h4>
      <p className="text-black/80 md:max-h-[150px]">
        {formatContentLength(content) + "..."}
      </p>
    </>
  );
};

export default CardContent;
