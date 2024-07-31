import { rootRoute } from "@/main";
import { createRoute } from "@tanstack/react-router";

import PricingPlans from "@/challenge-components/21 - PricingPlans/PricingPlans";

const pricingPlansRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/pricing-plans",
  component: PricingPlans,
});

export default [pricingPlansRoute];
