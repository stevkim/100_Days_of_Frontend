import Header from "./components/Header";
import ToggleBillingCycle from "./components/ToggleBillingCycle";
import PlanList from "./components/PlanList";
import "./pricingPlans.css";
import { createContext, useState } from "react";

export const BillingCycleContext = createContext<{
  billingCycle: boolean;
  setBillingCycle: (input: boolean) => void;
}>({
  billingCycle: false,
  setBillingCycle: () => {},
});

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState(false);

  return (
    <section className="pricing-page flex h-page w-full justify-center md:px-20">
      <div className="mt-20 flex h-fit w-full flex-col items-center rounded-xl bg-white px-8 py-12">
        <Header />
        <BillingCycleContext.Provider value={{ billingCycle, setBillingCycle }}>
          <ToggleBillingCycle />
          <PlanList />
        </BillingCycleContext.Provider>
      </div>
    </section>
  );
};

export default PricingPlans;
