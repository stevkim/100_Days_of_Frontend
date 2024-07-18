import type { TNotification, TMention } from "../../../types/notificationType";
import TimeStamp from "../../TimeStamp";

interface MentionProps {
  content: TNotification<unknown>;
}

const Mention = ({ content }: MentionProps) => {
  const typedContent = content as TNotification<TMention>;

  return (
    <>
      <p className="text-xs">
        <span className="font-semibold">{typedContent.user.name}</span>{" "}
        mentioned you in a<span className="font-semibold"> comment.</span>
      </p>
      <TimeStamp time={typedContent.date} />
    </>
  );
};

export default Mention;
