import { rootRoute } from "@/main";
import { createRoute } from "@tanstack/react-router";

import ProfileCard from "@/challenge-components/1 - ProfileCard/ProfileCard";
import AddToBag from "@/challenge-components/2 - AddToBag/AddToBag";
import MobileNavigation from "@/challenge-components/3 - MobileNavigation/MobileNavigation";
import ContactPage from "@/challenge-components/4 - ContactPage/ContactPage";
import Recipe from "@/challenge-components/5 - Recipe/Recipe";
import ImageCarouselPage from "@/challenge-components/6 - ImageCarousel/ImageCarouselPage";
import CreateAccountPage from "@/challenge-components/7 - CreateAccount/CreateAccountPage";
import MusicEventsPage from "@/challenge-components/8 - MusicEvents/MusicEventsPage";

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

// Challenge 5
const recipeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/recipe",
  component: Recipe,
});

// Challenge 6
const imageCarouselRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/image-carousel",
  component: ImageCarouselPage,
});

// Challenge 7
const createAccountRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/create-account",
  component: CreateAccountPage,
});

// Challenge 8
const musicEventsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/music-events",
  component: MusicEventsPage,
});

export default [
  profileCardRoute,
  addToBagRoute,
  mobileNavRoute,
  contactPageRoute,
  recipeRoute,
  imageCarouselRoute,
  createAccountRoute,
  musicEventsRoute,
];
