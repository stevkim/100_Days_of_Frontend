import NotificationIcon from "./components/NotificationIcon";
import { useState } from "react";

const NotificationsPage = () => {
  const [notifications, setNotifcations] = useState([]);
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <section className="flex h-page w-full items-center justify-center bg-gray-200">
      <div className="border">
        <NotificationIcon
          empty={notifications.length === 0}
          toggleOpen={toggleOpen}
        />
      </div>
    </section>
  );
};

export default NotificationsPage;
