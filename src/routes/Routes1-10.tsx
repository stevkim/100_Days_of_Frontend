import { rootRoute } from "@/main";
import { createRoute } from "@tanstack/react-router";

import ProfileCard from "@/challenge-components/1 - ProfileCard/ProfileCard";
import AddToBag from "@/challenge-components/2 - AddToBag/AddToBag";
import MobileNavigation from "@/challenge-components/3 - MobileNavigation/MobileNavigation";
import ContactPage from "@/challenge-components/4 - ContactPage/ContactPage";

// Challenge 1
const profileCardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profile-card",
  component: ProfileCard,
});

// Challenge 2
const addToBagRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/add-to-bag",
  component: AddToBag,
});

// Challenge 3
const mobileNavRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/mobile-nav",
  component: MobileNavigation,
});

// Challenge 4
const contactPageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact-page",
  component: ContactPage,
});

export default [
  profileCardRoute,
  addToBagRoute,
  mobileNavRoute,
  contactPageRoute,
];
