import Notification from "./Notification/Notification";
import Separator from "@/components/Separator";
import { Fragment } from "react/jsx-runtime";
import { useContext } from "react";
import { NotificationContext } from "../NotificationsPage";

const NotificationList = () => {
  const { list } = useContext(NotificationContext);

  if (list.length === 0) {
    return (
      <p className="mb-4 mt-2 text-center text-[.6rem] text-muted">
        You don't have any notifications yet.
      </p>
    );
  }

  return (
    <>
      <ul>
        {list.map((notif) => {
          return (
            <Fragment key={notif.id}>
              <Notification content={notif} />
              <Separator className="my-0 h-[1px] bg-gray-100" />
            </Fragment>
          );
        })}
      </ul>
      <button className="mx-auto my-4 w-[90%] rounded-md bg-secondary-blue py-2 text-xs text-white hover:bg-primary-blue">
        See all notifications
      </button>
    </>
  );
};

export default NotificationList;
