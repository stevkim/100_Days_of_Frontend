import type { TNotification, TPost } from "../../../types/notificationType";
import TimeStamp from "../../TimeStamp";

interface JoinGroupProps {
  content: TNotification<unknown>;
}

const JoinGroup = ({ content }: JoinGroupProps) => {
  const typedContent = content as TNotification<TJoinGroup>;

  return (
    <>
      <p className="text-xs">
        <span className="font-semibold">{typedContent.user.name}</span> joined
        the{" "}
        <span className="font-semibold">"{typedContent.content!.name}" </span>
        Group.
      </p>
      <TimeStamp time={typedContent.date} />
    </>
  );
};

export default JoinGroup;
