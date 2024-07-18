import NotificationList from "./NotificationList";
import ClearButton from "./ClearButton";

const NotificationContent = () => {
  return (
    <div className="absolute right-0 top-[100%] flex w-[300px] flex-col justify-center rounded-md bg-white shadow-lg">
      <h4 className="flex w-full items-center p-4 font-semibold">
        Notifications <ClearButton />
      </h4>
      <NotificationList />
    </div>
  );
};

export default NotificationContent;
