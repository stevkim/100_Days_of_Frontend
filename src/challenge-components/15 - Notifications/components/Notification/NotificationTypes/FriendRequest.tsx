import type { TNotification } from "../../../types/notificationType";
import TimeStamp from "../../TimeStamp";
interface FriendRequestProps {
  content: TNotification<unknown>;
}

const FriendRequest = ({ content }: FriendRequestProps) => {
  const typedContent = content as TNotification<null>;

  return (
    <>
      <p className="text-xs">
        <span className="font-semibold">{typedContent.user.name}</span> sent you
        a<span className="font-semibold"> friend request.</span>
      </p>
      <TimeStamp time={typedContent.date} />
      <div className="mt-1 flex w-full justify-evenly gap-2">
        <button className="w-full rounded-md bg-secondary-blue py-1 text-[.7rem] text-white hover:bg-primary-blue">
          Accept
        </button>
        <button className="w-full rounded-md bg-gray-300 py-1 text-[.7rem] hover:bg-gray-200">
          Decline
        </button>
      </div>
    </>
  );
};

export default FriendRequest;
