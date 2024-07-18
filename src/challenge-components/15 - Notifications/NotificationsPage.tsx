import BellIcon from "./components/BellIcon";
import NotificationContent from "./components/NotificationContent";
import { useState, createContext } from "react";
import { NOTIFICATIONS } from "./data";
import type { TNotification } from "./types/notificationType";

export const NotificationContext = createContext<{
  list: TNotification<unknown>[];
  clearNotifications: () => void;
  removeOneNotification: (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number,
  ) => void;
}>({
  list: [],
  clearNotifications: () => {},
  removeOneNotification: () => {},
});

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState(NOTIFICATIONS);
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  const removeOneNotification = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number,
  ) => {
    e.stopPropagation();
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  return (
    <section className="flex h-page w-full justify-center bg-gray-200 pt-20">
      <div className="relative flex h-[50px] w-[300px] items-center border">
        <BellIcon empty={notifications.length === 0} toggleOpen={toggleOpen} />
        {open ? (
          <NotificationContext.Provider
            value={{
              list: notifications,
              clearNotifications,
              removeOneNotification,
            }}
          >
            <NotificationContent />
          </NotificationContext.Provider>
        ) : null}
      </div>
    </section>
  );
};

export default NotificationsPage;
