import { useRef, useContext } from "react";
import { BillingCycleContext } from "../PricingPlans";

const ToggleBillingCycle = () => {
  const { billingCycle, setBillingCycle } = useContext(BillingCycleContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleInput = () => {
    inputRef.current?.click();
  };

  return (
    <div className="mb-20 mt-10 flex items-center">
      <span
        className={`text-xs font-semibold ${billingCycle ? "" : "text-muted"}`}
      >
        Billed annually
      </span>
      <input
        type="checkbox"
        ref={inputRef}
        hidden
        onChange={(e) => setBillingCycle(e.target.checked)}
      />
      <div
        className={`mx-1 h-[1.4rem] w-[2.2rem] rounded-xl border border-black p-[.1rem] ${billingCycle ? "bg-blue-400" : "bg-blue-300"}`}
        onClick={toggleInput}
      >
        <div
          className={`aspect-square w-[1rem] rounded-full bg-white transition-all ${billingCycle ? "" : "translate-x-[.8rem]"}`}
        ></div>
      </div>
      <span
        className={`text-xs font-semibold ${billingCycle ? "text-muted" : ""}`}
      >
        Billed monthly
      </span>
    </div>
  );
};

export default ToggleBillingCycle;
