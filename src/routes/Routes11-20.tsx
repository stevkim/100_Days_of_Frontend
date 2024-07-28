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
import ImagePreview from "@/challenge-components/18 - ImagePreviews/ImagePreview";
import UploadPhoto from "@/challenge-components/19 - UploadPhoto/UploadPhoto";
import CardWallet from "@/challenge-components/20 - CardWallet/CardWallet";

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

// Challenge 18
const imagePreviewRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/image-preview",
  component: ImagePreview,
});

// Challenge 19
const uploadPhotoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/upload-photo",
  component: UploadPhoto,
});

// Challenge 20
const cardWalletRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/card-wallet",
  component: CardWallet,
});

export default [
  hotelBookingRoute,
  restaurantReservationRoute,
  taskBoardRoute,
  shoppingListRoute,
  notificationsRoute,
  furFriendsRoute.addChildren([furFriendsIndexRoute, furFriendsProfileRoute]),
  articleSliderRoute,
  imagePreviewRoute,
  uploadPhotoRoute,
  cardWalletRoute,
];
