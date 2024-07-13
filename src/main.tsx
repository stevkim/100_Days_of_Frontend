import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Routes1_10 from "@/routes/Routes1-10.tsx";
import Routes11_20 from "@/routes/Routes11-20.tsx";

export const rootRoute = createRootRoute({
  component: App,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <div>home</div>,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  ...Routes1_10,
  ...Routes11_20,
]);

const router = createRouter({ routeTree });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
