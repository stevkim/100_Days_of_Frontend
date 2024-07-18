import { rootRoute } from "@/main";
import { createRoute } from "@tanstack/react-router";

import HotelBooking from "@/challenge-components/11 - HotelBooking/HotelBooking";
import RestaurantReservationPage from "@/challenge-components/12 - RestaurantReservation/RestaurantReservartionPage";
import TaskBoard from "@/challenge-components/13 - TaskBoard/TaskBoard";
import ShoppingList from "@/challenge-components/14 - ShoppingList/ShoppingList";
import NotificationsPage from "@/challenge-components/15 - Notifications/NotificationsPage";

// Challenge 11
const hotelBookingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/hotel-booking",
  component: HotelBooking,
});

// Challenge 12
const restaurantReservationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/restaurant-reservation",
  component: RestaurantReservationPage,
});

// Challenge 13
const taskBoardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/task-board",
  component: TaskBoard,
});

// Challenge 14
const shoppingListRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/shopping-list",
  component: ShoppingList,
});

// Challenge 15
const notificationsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/notifications-page",
  component: NotificationsPage,
});

export default [
  hotelBookingRoute,
  restaurantReservationRoute,
  taskBoardRoute,
  shoppingListRoute,
  notificationsRoute,
];
