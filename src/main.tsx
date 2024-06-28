import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ProfileCard from "./challenge-components/1 - ProfileCard/ProfileCard.tsx";
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

const profileCardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profile-card",
  component: ProfileCard,
});

const routeTree = rootRoute.addChildren([indexRoute, profileCardRoute]);

const router = createRouter({ routeTree });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
