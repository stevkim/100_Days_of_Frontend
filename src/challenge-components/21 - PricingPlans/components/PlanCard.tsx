import type { TPlan } from "../data";
import { useContext } from "react";
import { BillingCycleContext } from "../PricingPlans";
import Price from "./Price";
import { TypeNames, type TypeName } from "../lib/typeNames";

interface PlanCardProps {
  plan: TPlan;
  index: number;
}

const PlanCard = ({ plan, index }: PlanCardProps) => {
  const { billingCycle } = useContext(BillingCycleContext);

  return (
    <div className="relative flex min-w-[300px] flex-col overflow-hidden rounded-lg px-4 py-6 shadow-xl">
      <span className="text-sm">{TypeNames[plan.type as TypeName]}</span>
      <span className="my-2 text-3xl">{plan.name}</span>
      <Price price={plan.price} billingCycle={billingCycle} />
      {index === 0 ? (
        <div className="absolute left-[45%] top-[15%] w-full rotate-45 bg-yellow-400 pr-[4.2rem] text-center font-semibold">
          Best value
        </div>
      ) : null}

      <ul className="my-8 list-inside list-disc text-gray-500">
        {plan.features.map((feature) => {
          return (
            <li key={feature} className="mb-1">
              {feature}
            </li>
          );
        })}
      </ul>
      <button
        className="w-full rounded-lg bg-blue-400 py-2 text-white hover:bg-blue-300"
        onClick={() => alert(":D")}
      >
        Try free for 30 days
      </button>
    </div>
  );
};

export default PlanCard;
