import { rootRoute } from "@/main";
import { createRoute } from "@tanstack/react-router";

import HotelBooking from "@/challenge-components/11 - HotelBooking/HotelBooking";
import RestaurantReservationPage from "@/challenge-components/12 - RestaurantReservation/RestaurantReservartionPage";
import TaskBoard from "@/challenge-components/13 - TaskBoard/TaskBoard";

// Challenge 11
const hotelBookingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/hotel-booking",
  component: HotelBooking,
});

// Challenge 11
const restaurantReservationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/restaurant-reservation",
  component: RestaurantReservationPage,
});

// Challenge 11
const taskBoardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/task-board",
  component: TaskBoard,
});

export default [hotelBookingRoute, restaurantReservationRoute, taskBoardRoute];
