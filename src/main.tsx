import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ProfileCard from "./challenge-components/1 - ProfileCard/ProfileCard.tsx";
import AddToBag from "./challenge-components/2 - AddToBag/AddToBag.tsx";
import MobileNavigation from "./challenge-components/3 - MobileNavigation/MobileNavigation.tsx";
import "./index.css";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

const rootRoute = createRootRoute({
  component: App,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <div>home</div>,
});

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

const routeTree = rootRoute.addChildren([
  indexRoute,
  profileCardRoute,
  addToBagRoute,
  mobileNavRoute,
]);

const router = createRouter({ routeTree });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
