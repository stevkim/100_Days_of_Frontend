import { Outlet } from "@tanstack/react-router";
import "./furFriendsStyles.css";

const FurFriends = () => {
  return (
    <section className="flex h-page w-full justify-center bg-gray-200">
      <Outlet />
    </section>
  );
};

export default FurFriends;
