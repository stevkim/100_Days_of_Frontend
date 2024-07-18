import type { TNotification } from "../../types/notificationType";
import FriendRequest from "./NotificationTypes/FriendRequest";
import JoinGroup from "./NotificationTypes/JoinGroup";
import Mention from "./NotificationTypes/Mention";
import Post from "./NotificationTypes/Post";
import { useMemo, useContext } from "react";
import NotificationImage from "./NotificationImage/NotificationImage";
import { X } from "lucide-react";
import { NotificationContext } from "../../NotificationsPage";

interface NotificationProps {
  content: TNotification<unknown>;
}

const Notification = ({ content }: NotificationProps) => {
  const { removeOneNotification } = useContext(NotificationContext);

  const MessageContent = useMemo(() => {
    if (content.type === "join-group") {
      return <JoinGroup content={content} />;
    }
    if (content.type === "mention") {
      return <Mention content={content} />;
    }
    if (content.type === "friend-request") {
      return <FriendRequest content={content} />;
    }
    if (content.type === "post") {
      return <Post content={content} />;
    }
  }, [content]);

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();

    alert("Custom behavior! \n Redirect maybe?");
  };

  return (
    <li
      className="flex w-full gap-2 px-2 py-2 hover:bg-gray-100"
      onClick={handleClick}
    >
      <NotificationImage image={content.user.image} type={content.type} />
      <div className="flex w-full flex-col">{MessageContent}</div>
      <button
        className="h-full hover:scale-110"
        onClick={(e) => removeOneNotification(e, content.id)}
      >
        <X size={12} />
      </button>
    </li>
  );
};

export default Notification;
