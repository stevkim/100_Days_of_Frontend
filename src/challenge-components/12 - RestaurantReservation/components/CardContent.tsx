import CardHeader from "./CardHeader";

interface CardContentProps {
  data: {
    name: string;
    description: string;
    address: string;
    reviews: { name: string; review: string; rating: number }[];
  };
}

const CardContent = ({ data }: CardContentProps) => {
  return (
    <div className="p-4">
      <CardHeader data={data} />
      <p className="text-xs">{data.description}</p>
    </div>
  );
};
export default CardContent;
