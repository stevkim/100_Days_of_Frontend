import Header from "./components/Header";
import ToggleBillingCycle from "./components/ToggleBillingCycle";
import "./pricingPlans.css";

const PricingPlans = () => {
  return (
    <section className="pricing-page flex h-page w-full justify-center md:px-20">
      <div className="mt-20 flex w-full flex-col items-center rounded-xl bg-white px-8 py-12">
        <Header />
        <ToggleBillingCycle />
      </div>
    </section>
  );
};

export default PricingPlans;
