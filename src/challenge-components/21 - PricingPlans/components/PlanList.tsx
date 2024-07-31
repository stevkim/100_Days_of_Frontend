import PlanCard from "./PlanCard";
import { PLANS } from "../data";

const PlanList = () => {
  return (
    <div className="flex w-full flex-col justify-evenly px-10 xl:flex-row">
      {PLANS.map((plan, index) => {
        return <PlanCard key={plan.name} plan={plan} index={index} />;
      })}
    </div>
  );
};

export default PlanList;
