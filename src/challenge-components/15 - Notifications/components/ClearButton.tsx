import { useContext } from "react";
import { NotificationContext } from "../NotificationsPage";

const ClearButton = () => {
  const { clearNotifications } = useContext(NotificationContext);

  return (
    <button
      className="ml-auto text-[.6rem] text-muted"
      onClick={clearNotifications}
    >
      Mark as read
    </button>
  );
};

export default ClearButton;
