import { Timer, Award, WalletMinimal } from "lucide-react";
import { convertCost } from "../lib/convertCost";

interface Props {
  data: { totalTime: number; difficulty: string; cost: number };
}

const RecipeWidget = ({ data }: Props) => {
  return (
    <div className="flex flex-row gap-6">
      <div className="flex items-center">
        <Timer size={24} />
        <div className="ml-2 flex flex-col">
          <span className="text-[.6rem] font-semibold">TOTAL TIME</span>
          <span className="text-[.6rem] font-semibold text-yellow-600">
            {data.totalTime} minutes
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <Award size={24} />
        <div className="ml-2 flex flex-col">
          <span className="text-[.6rem] font-semibold">LEVEL</span>
          <span className="text-[.6rem] font-semibold text-yellow-600">
            {data.difficulty}
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <WalletMinimal size={24} />
        <div className="ml-2 flex flex-col">
          <span className="text-[.6rem] font-semibold">BUDGET</span>
          <span className="text-[.6rem] font-semibold text-yellow-600">
            {convertCost(data.cost)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeWidget;
