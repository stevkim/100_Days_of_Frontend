import { rootRoute } from "@/main";
import { createRoute } from "@tanstack/react-router";

import PricingPlans from "@/challenge-components/21 - PricingPlans/PricingPlans";
import Messages from "@/challenge-components/22 - Messages/Messages";

const pricingPlansRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/pricing-plans",
  component: PricingPlans,
});

const messagesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/messages",
  component: Messages,
});

export default [pricingPlansRoute, messagesRoute];
