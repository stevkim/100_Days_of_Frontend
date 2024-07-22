import { rootRoute } from "@/main";
import { createRoute } from "@tanstack/react-router";

import HotelBooking from "@/challenge-components/11 - HotelBooking/HotelBooking";
import RestaurantReservationPage from "@/challenge-components/12 - RestaurantReservation/RestaurantReservartionPage";
import TaskBoard from "@/challenge-components/13 - TaskBoard/TaskBoard";
import ShoppingList from "@/challenge-components/14 - ShoppingList/ShoppingList";
import NotificationsPage from "@/challenge-components/15 - Notifications/NotificationsPage";
import FurFriends from "@/challenge-components/16 - FurFriends/FurFriends";
import DogListPage from "@/challenge-components/16 - FurFriends/DogListPage";
import DogProfilePage from "@/challenge-components/16 - FurFriends/DogProfilePage";
import ArticleSlider from "@/challenge-components/17 - ArticleSlider/ArticleSlider";

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

// Challenge 16
const furFriendsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/fur-friends",
  component: FurFriends,
});

const furFriendsIndexRoute = createRoute({
  getParentRoute: () => furFriendsRoute,
  path: "/",
  component: DogListPage,
});

const furFriendsProfileRoute = createRoute({
  getParentRoute: () => furFriendsRoute,
  path: "/$dogId",
  component: DogProfilePage,
});

// Challenge 17
const articleSliderRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/article-slider",
  component: ArticleSlider,
});

export default [
  hotelBookingRoute,
  restaurantReservationRoute,
  taskBoardRoute,
  shoppingListRoute,
  notificationsRoute,
  furFriendsRoute.addChildren([furFriendsIndexRoute, furFriendsProfileRoute]),
  articleSliderRoute,
];
